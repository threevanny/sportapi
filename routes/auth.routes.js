const express = require('express')
const { auth } = require('../middlewares/auth')
const router = express.Router()

const {
  register,
  login,
  goToProfile,
  logout
} = require('../controllers/auth.controller')

router.post('/api/register', register)
router.post('/api/login', login)
router.get('/api/profile', auth, goToProfile)
router.get('/api/logout', auth, logout)

module.exports = router