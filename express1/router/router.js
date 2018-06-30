const express = require("express");
const router = express();

app.get("/",function(req, res){
    console.log("user accessing GET / HOME");
    res.send({
        "hello":"world"
    });
});

router.get("/api/course",function(req, res){
    console.log("user accessing GET / HOME");
    res.send([
        {
            id:1,
            title:"dorama",
            description:"dorama is the best"
        },
        {
            id:1,
            title:"dorama",
            description:"dorama is the best"
        }
    ]);
});