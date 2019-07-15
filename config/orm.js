// Import (require) connection.js into orm.js
// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
// selectAll()
// insertOne()
// updateOne()
// Export the ORM object in module.exports.





var connection = require("../config/connection.js");

var orm = {
  selectAll: function(selectAll, burgerTable, cb){
    var queryString = "SELECT ?? FROM ??"

    connection.query(queryString, [selectAll, burgerTable], function(err, data){
      if (err){
        throw err;
      }

      cb(data);

    })

  },

  insertOne: function(burgerTable, burgerName, newBurger, cb){
    var queryString = "INSERT INTO ?? (??) VALUE ?? "
    connection.query(queryString, [burgerTable, burgerName, newBurger], function(err, data){
      if (err){
        throw err;
      }

      cb(data);

    })

  },
  updateOne: function(burgerTable, eaten, eatenVariable, burgerName, newBurger){
    var queryString = "UPDATE ?? SET ?? = ?  WHERE ?? = ?"
    connection.query(queryString, [burgerTable, eaten, eatenVariable, burgerName, newBurger], function(err, data){
      if (err){
        throw err;
      }

      cb(data);

    })

  }
}


module.exports = orm