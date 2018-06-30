var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// var pug = require("pug");
var ejs = require("ejs");

var app = express();

var port = 7000;

// custom middleware
app.use(function(req,res,next){
    console.log("Time : ",Date.now());
    next();
});
// middeware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'/public'))); 

//app.set("view engine","pug");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,'views'));

app.get("/",function(req,res){
    //res.send(" Home Page ")
    //res.sendFile("views/index.html",{root:path.join(__dirname)});
    res.render("index",{
        "title":"Home",
        "description":"My God, i passing data from express",
        "skills":["PHP","javascript","HTML","CSS"],
        "isMale":false
    });
});

app.get("/users/login",function(req,res){
    res.send("<h1> login page </h1> ");
});

app.get("/users/logout",function(req,res){
    res.send("<h2> Logout </h2>");
});

app.get("/users/register",function(req,res){
    res.send("<h2> Register </h2>");
});

app.get("/about",function(req,res){
    //res.sendFile("views/about.html",{root:path.join(__dirname)});
    res.render("about",{
        "title":"About"
    });
});

app.set('port', process.env.PORT || 3000);
app.listen(port,function(req,res){
    console.log("Server listen to port :"+port);
});

module.exports = app;