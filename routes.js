const routes = require('next-routes')

module.exports = routes()
  .add('bookNew', '/books/new')
  .add('book', '/book/:id')
  .add('bookEdit', '/books/:id/edit')
