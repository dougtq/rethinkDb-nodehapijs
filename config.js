const { NODE_ENV } = process.env
const config = `./src/config/config.${NODE_ENV || 'development'}.js`
module.exports = require(config)
