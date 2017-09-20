let fs = require('fs')
let Hapi = require('hapi')
let config = require('./config.js')

const server = new Hapi.Server()

// const handlers = []

// fs.readdirSync('./handlers').forEach(file => {
//   const path = `./handlers/${file}`
//   handlers.push(require(path))
// })

server.connection(config.server)

  server.register({
    register: require('hapi-router'),
    options: {
      routes: ['src/tasks/routes.js']
    }
  })


  server.start((err) => {
    if (!err){
      if (!config.isTest ) {
        console.log('Hapi-RethinkDB TODO API')
        console.log(`Address: ${config.server.host}:${config.server.port}`)
      }
    }
  })


module.exports = server
