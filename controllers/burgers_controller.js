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

router.post("/api/burger", function(req, res){
  burger.insertOne(newBurger,[req.body.newBurgerName],function(data){
    console.log(data)
  })
})

router.put("api/burger/:id", function(req,res){
  burger.updateOne(function(data){
    console.log(data);
    
  })
})

module.exports = router;