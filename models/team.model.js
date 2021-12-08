const mongoose = require('mongoose')

const teamSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: true
  },
  members:{
    type: Array,
    required: true
  },
  coach: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
} , {
  versionKey: false
})

module.exports = mongoose.model('Team', teamSchema)
