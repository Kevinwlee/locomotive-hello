var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var booksController = new Controller();

booksController.index = function() {
  this.title = "My Books";
  this.description = "This could be a list of books.";
  this.books = [{"title":"Finding Ultra"}, {"title":"Open"}, {"title":"Thrive"}];
  this.render();
}

module.exports = booksController;