var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var accountsController = new Controller();

accountsController.index = function() {
  this.title = "Account Title"
  this.render();
}

module.exports = booksController;