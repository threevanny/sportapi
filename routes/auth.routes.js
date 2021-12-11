const express = require('express')
const { auth } = require('../middlewares/auth')
const router = express.Router()
var cors = require('cors')

var corsOptions = {
  origin: 'https://threevanny.github.io/sportapp',
  optionsSuccessStatus: 200 
}

const {
  register,
  login,
  goToProfile,
  logout,
  getUser,
} = require('../controllers/auth.controller')

router.post('/api/register', cors(corsOptions), register)
router.post('/api/login', cors(corsOptions), login)
router.post('/api/profile', auth, goToProfile)
router.get('/api/logout', auth, logout)
router.post('/api/user/:id', getUser)

module.exports = router