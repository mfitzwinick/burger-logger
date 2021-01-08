// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb (res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(col, val, cb) {
    orm.create("burgers", col, val, function(res){
      cb(res)
    });
  },
  update: function(val, cond, cb) {
    console.log(val)
    console.log(cond)
    orm.update("burgers", val, cond,function(res) {
      console.log(res)
      cb (res);
    });
  },
};


module.exports = burger;
