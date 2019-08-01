// Inside the burgers_controller.js file, import the following:
// Express
// burger.js
// Create the router for the app, and export the router at the end of your file.
var burger = require("../models/burger");
var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
burger.selectAll(function(data){
  console.log(data)
res.render("index", {data})  
})
})

router.post("/", function(req, res){
  newBurger = req.body.burgerName
  burger.insertOne(newBurger, function(data){
    console.log(newBurger)
    res.redirect("/")
    //console.log(data)
  })
})

router.put("/api/burger/:newBurger" , function(req,res){
  eatenVariable = req.body.eatenVariable
  //updateBurger = req.params.updateBurger.eatenVariable,
  newBurger = req.params.newBurger
  console.log(eatenVariable);
  console.log(newBurger);
  burger.updateOne(eatenVariable, newBurger, function(data){
//   console.log(updateBurger.eatenVariable)
    console.log(data);
    res.redirect("/")
  })
  
 // res.redirect("/")
})

module.exports = router;