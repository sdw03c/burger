const mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  username: "root",
  password: "SharonLearnsSQL1!",
  database: "burgers"
})

connection.connect(function(err){
  if (err){
  console.log(`Error connecting: ${err.stack}`)  
    throw err}
  console.log(`Connected as id: ${connection.threadId}`)
})


module.exports = connection