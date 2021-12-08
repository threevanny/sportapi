const mongoose = require('mongoose')

const tournamentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  teams:{
    type: Array,
    required: true
  },
  referee: {
    type: String,
    required: true
  },
  scenario: {
   type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Tournament', tournamentSchema)
