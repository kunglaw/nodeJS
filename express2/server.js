var express = require("express");
var path = require("path");
var app = express();

console.log(__dirname);

// folder gak bisa ditembak langusng url nya sama browser
app.use("/assets",express.static(__dirname+'/assets'))

app.get("/",function(request,response){
    //response.send("Index");
    response.sendFile("index.html",{root:path.join(__dirname)});
});

app.get("/helloThere",function(request,response){
    response.send("Hello There from express")
});

app.listen(1337,function(){
    console.log("Listen at Port 1337")
});