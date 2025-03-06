var express = require("express");
var app = express();

const path = require("path");

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(process.env.PORT ?? 3000, function () {
  console.log(`Listening on port ${process.env.PORT ?? 3000}...`);
});
const date = require('date-and-time') 
const now1  =  new Date(); 
const now2  =  new Date(); 
const value = date.isSameDay(now1,now2); 
// Display the result 
if(value) 
    console.log("Both dates are same") 
else
    console.log("Both dates are not same");
