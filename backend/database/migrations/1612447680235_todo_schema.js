'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TodoSchema extends Schema {
  up () {
    this.create('todos', (table) => {
      table.increments()
      table.string('owner').notNullable()
      table.text('description').notNullable()
      table.string('email').notNullable()
      table.integer('fallback').unsigned().default(0)
      table.enu('status',['done', 'undone']).default('done')
      table.timestamps()
    })
  }

  down () {
    this.drop('todos')
  }
}

module.exports = TodoSchema
