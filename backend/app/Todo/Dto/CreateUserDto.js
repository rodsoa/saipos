function createUserDto ( data ) {
  return {
    "description": data.description ?? '',
    "owner": data.owner ?? '',
    "email": data.email ?? '',
    "status": 'undone'
  }
}

module.exports = createUserDto
