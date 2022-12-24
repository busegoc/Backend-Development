//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});
app.listen(3000);
app.post("/", function(req,res){
var number1 =Number( req.body.num1);
var number2 = Number(req.body.num2);
  res.send("The solution is "+(number1+number2));
})
