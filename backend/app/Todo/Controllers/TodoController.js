'use strict'

const service = require('../Services/TodoService')

class TodoController {

  async index() {
    return await service.all()
  }

  async create({ request }) {
    return await service.new(
      request.all()
    )
  }

  async doneTask({ params }) {
    return await service.done(params.id)
  }

  async undoneTask({ params }) {
    return await service.undone(params.id)
  }

}

module.exports = TodoController
