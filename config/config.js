const config = {
  production: {
    SECRET: process.env.SECRET,
    DATABASE: process.env.MONGODB_URI
  },
  default: {
    SECRET: 'a secret word',
    DATABASE: 'mongodb://localhost/sport'
  }
}

exports.get = function get(env) {
  return config[env] || config.default
}