const express = require('express')
const router = express.Router()

const {
  getTournaments,
  createTournament
} = require('../controllers/tournament.controller')

router.get('/api/tournament/all', getTournaments)
router.post('/api/tournament/create', createTournament)

module.exports = router