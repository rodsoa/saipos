'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('todo/', 'App/Todo/Controllers/TodoController.index')
Route
  .post('todo/', 'App/Todo/Controllers/TodoController.create')
  .validator('App/Todo/Requests/StoreTask')
Route.post('todo/:id/done', 'App/Todo/Controllers/TodoController.doneTask')
Route.post('todo/:id/undone', 'App/Todo/Controllers/TodoController.undoneTask')
