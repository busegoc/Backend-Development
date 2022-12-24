//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});
app.listen(3000);
app.post("/", function(req,res){
var weight =Number( req.body.weight);
var height = Number(req.body.height);
var bmi = (weight/(height*height));
  res.send("The solution is "+ bmi);
})
