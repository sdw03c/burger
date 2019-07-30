var orm = require("../config/orm")

var burger = {
  selectAll: function(cb)
{
  orm.selectAll("*", "burgers", function(res){
    cb(res);
  })
},

insertOne: function(newBurger, cb)
{
  orm.insertOne("burgers", "burger_name", newBurger, function(res){
    cb(res);
  })
},
updateOne: function(eatenVariable, newBurger, cb)
{
  orm.updateOne("burgers", "devoured", eatenVariable, "burger_name", newBurger, function(res){
   
    cb(res);
  })
},

};

module.exports = burger;
