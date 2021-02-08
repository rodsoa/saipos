'use strict'

const createUserDto = require("../Dto/CreateUserDto")

const Todo = use('App/Todo/Models/Todo')
const db = use('Database')

class TodoService {

  async all () {
    return await db
      .table('todos')
      .orderBy('created_at', 'desc')
  }

  async new ( data ) {
    if ( typeof data !== 'object') {
      throw new Error('Data is not an object');
    }

    const task = new Todo()

    task.fill(createUserDto(data))

    await task.save()

    return task;
  }

  async done(id) {
    const task = await Todo.findOrFail(id)

    if (task.status !== 'undone') {
      throw new Error('Tarefa já completada')
    }

    task.status = 'done'

    await task.save()

    return task
  }

  async undone(id) {
    const task = await Todo.findOrFail(id)

    if (task.status !== 'done') {
      throw new Error('Tarefa ainda não completada')
    }

    if (task.fallback === 3 ) {
      throw new Error('Tarefa já excedeu limite de retornos')
    }

    task.status = 'undone'
    task.fallback += 1

    await task.save()

    return task
  }

}

module.exports = new TodoService
