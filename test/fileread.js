var fs = require("fs");

console.log (" Execute Before File Reading ");

fs.readFile("./app.js",'utf8',function(error,data){
    console.log(data);
});

console.log("Executed After File Reading, probably")