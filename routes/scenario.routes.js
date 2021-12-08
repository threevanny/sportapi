const express = require('express')
const router = express.Router()

const {
  getScenarios,
  createScenario

} = require('../controllers/scenario.controller')

router.get('/api/scenario/all', getScenarios)
router.post('/api/scenario/create', createScenario)

module.exports = router