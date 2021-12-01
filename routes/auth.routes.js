const express = require('express')
const { auth } = require('../middlewares/auth')
const router = express.Router()

const {
  register,
  login,
  goToProfile,
  logout,
  getUser,
} = require('../controllers/auth.controller')

router.post('/api/register', register)
router.post('/api/login', login)
router.post('/api/profile', auth, goToProfile)
router.get('/api/logout', auth, logout)
router.post('/api/user/:id', getUser)

module.exports = router