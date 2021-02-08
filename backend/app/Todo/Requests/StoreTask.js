'use strict'

class StoreTask {
  get rules () {
    return {
      owner: 'required|string',
      email: 'required|email',
      description: 'required|string'
    }
  }
}

module.exports = StoreTask
