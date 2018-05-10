const path = require('path')

module.exports = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.CLIENT_PORT || 8080,
  api: process.env.API_URL || 'http://localhost:3000/',
  src: path.resolve('./src'),
  dist: path.resolve('./dist')
}
