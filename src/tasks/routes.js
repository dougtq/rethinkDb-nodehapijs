'use strict'

let Joi = require('joi')
let handler = require('./handlers')
let TasksModel = require('../models/tasks.js')
let Tasks = new TasksModel()

module.exports = [
  {
    method: 'GET',
    path: '/tasks',
    handler: handler.list
  },
  {
    method: 'GET',
    path: '/tasks/{taskId}',
    handler: handler.listById
  },
  {
    method: 'POST',
    path: '/tasks',
    handler: handler.insert,
    config: {
      validate: Tasks.validate()
    }
  },
  {
    method: 'PUT',
    path: '/tasks/{taskId}',
    handler: handler.update,
    config: {
      validate: Tasks.validate()
    }
  },
  {
    method: 'DELETE',
    path: '/tasks/{taskId}',
    handler: handler.delete
  }
]
