var http = require("http"); // karena module bawaan node js, maka tidak perlu
// memakai ./nama_file
var fs = require("fs");
var url = require("url");
var qString = require("querystring");


http.createServer(function(req,res){
  var code = 200;
  var file = "";
  var access = url.parse(req.url); // parse untuk mendapat path


    var data = qString.parse(access.query); // sudah berubah jadi object dr queryString
    res.writeHead(code,{"Content-type":"text/plain"});
    res.end(JSON.stringify(data));
  

 /* var html  = " <html><head></head><body><h1> Hello world </h1><hr><div>";
 html += "Nama : "+data.nama+"<br>";
 html += "Umur : "+data.umur;
 html += "</div></body></html> ";
 //console.log(access.query);

  res.writeHead(code,{"Content-type":"text/html"});
  res.end(html);*/
  //res.end();
}).listen(8888);

console.log("server is running .....");
