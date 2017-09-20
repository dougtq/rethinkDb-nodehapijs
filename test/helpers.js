let Chai = require('chai')
let r = require('rethinkdb')
let config = require('../../config.js')
let server = require('../../index.js')

global.r = r
global.config = config
global.expect = Chai.expect
global.server = server
