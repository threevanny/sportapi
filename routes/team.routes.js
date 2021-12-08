const express = require('express')
const router = express.Router()

const {
  createTeam,
  getTeams,
} = require('../controllers/team.controller')

router.post('/api/team/create', createTeam)
router.get('/api/team/all', getTeams)

module.exports = router