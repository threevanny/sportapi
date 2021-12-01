const { removeListener } = require('npmlog')
const User = require('../models/user')

const authCtrl = {}

authCtrl.register = (req, res) => {
  console.log(req.body)
  const newuser = new User(req.body)

  if (newuser.password != newuser.password2) return res.status(400).json({ message: "password not match" })

  User.findOne({ email: newuser.email }, function (err, user) {
    if (user) return res.status(400).json({ auth: false, message: "email exits" })

    newuser.save((err, doc) => {
      if (err) {
        console.log(err)
        return res.status(400).json({ success: false })
      }
      res.status(200).json({
        success: true,
        user: doc
      })
    })
  })
}

authCtrl.login = (req, res) => {
  let token = req.cookies.auth
  User.findByToken(token, (err, user) => {
    if (err) return res(err)
    if (user) return res.status(400).json({
      error: true,
      message: "You are already logged in"
    })

    else {
      User.findOne({ 'email': req.body.email }, function (err, user) {
        if (!user) return res.json({ isAuth: false, message: ' Auth failed, email not found' })

        user.comparepassword(req.body.password, (err, isMatch) => {
          if (!isMatch) return res.json({ isAuth: false, message: "password doesn't match" })

          user.generateToken((err, user) => {
            if (err) return res.status(400).send(err)
            res.cookie('auth', user.token).json({
              isAuth: true,
              id: user._id,
              email: user.email,
              firstname: user.firstname,
              lastname: user.lastname,
              token: user.token,
              role: user.role
            })
          })
        })
      })
    }
  })
}

authCtrl.goToProfile = (req, res) => {
  res.json({
    
    id: req.user._id,
    email: req.user.email,
    firstname: req.user.firstname,
    lastname: req.user.lastname,
    token: req.user.token,
    role: req.user.role
  })
}

authCtrl.logout = (req, res) => {
  req.user.deleteToken(req.token, (err, user) => {
    if (err) return res.status(400).send(err)
    res.sendStatus(200)
  })
}

authCtrl.getUser = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) return res.status(400).send(err)
    res.json(user)
  })
}

module.exports = authCtrl