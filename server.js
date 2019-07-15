const express = require("express");
const handlebars = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 8080

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller")
app.use(routes);

app.listen(PORT, function(){
  console.log(`Server listening on http://localhost: ${PORT}`)
})
