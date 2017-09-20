let Boom = require('boom')
let TasksModel = require('../models/tasks.js')
let Tasks = new TasksModel()

module.exports.list = (req, reply) => {
  Tasks.list((err, tasks) => {
    if (err) {
      return reply(Boom.wrap(err))
    }
    return reply(tasks)
  })
}

module.exports.listById = (req, reply) => {
  const { taskId } = req.params
  Tasks.get(taskId, (err, task) => {
    if (err) {
      return reply(Boom.wrap(err))
    }
    if (task) {
      return reply(task)
    }
    return reply().code(404)
  })
}

module.exports.insert = (req, reply) => {
  const task = req.payload
  Tasks.insert(task, (err, newTask) => {
    if (err) {
      return reply(Boom.wrap(err))
    }
    return reply(newTask)
  })
}

module.exports.update = (req, reply) => {
  const { taskId } = req.params
  const task = req.payload
  Tasks.update(taskId, task, (err, newTask) => {
    if (err) {
      return reply(Boom.wrap(err))
    }
    return reply(newTask)
  })
}

module.exports.delete = (req, reply) => {
  const { taskId } = req.params
  Tasks.delete(taskId, err => {
    if (err) {
      return reply(Boom.wrap(err))
    }
    return reply().code(204)
  })
}

// exports.register.attributes = {
//   name: 'tasks-handler',
//   version: '1.0.0'
// }
