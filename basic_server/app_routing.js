var http = require("http"); // karena module bawaan node js, maka tidak perlu
// memakai ./nama_file
var fs = require("fs");
var url = require("url");
var qString = require("querystring");
var routes = require("routes")(); // cara pendek
// routes = routes(); // cara panjang

// route baru telah di daftarkan
routes.addRoute("/",function(req,res){

   var html = "<html><head> <title> Home  </title></head>";
   html += "<body><div><h1> Home </h1><hr> <p> this is Home </p></div></body>";
   html += "</html>";

    res.writeHead(200,{"Content-type":"text/html"});
    res.end(html);
});

routes.addRoute("/contact",function(req,res){

   var html = "<html><head> <title> Contact  </title></head>";
   html += "<body><div><h1> Contact </h1><hr> <p> this is contact page </p></div></body>";
   html += "</html>";

    res.writeHead(200,{"Content-type":"text/html"});
    res.end(html);
});

//"/profile/:nama" kalay gak ada parameter nama , maka dia jadi not found
// "/profile/:nama?" ada parameter optional (?) kalau ada itu walau tidak ada nama tetap bisa diakses
routes.addRoute("/profile/:nama",function(req,res){

   var html = "<html><head> <title> "+this.params.nama+"  </title></head>";
   html += "<body><div><h1> "+this.params.nama+"Profile </h1><hr> <p> this is Profile "+this.params.nama+" </p></div></body>";
   html += "</html>";

    res.writeHead(200,{"Content-type":"text/html"});
    res.end(html);
});

http.createServer(function(req,res){
  var code = 200;
  var file = "";
  var path = url.parse(req.url).pathname;

// mencocokan url dengan url yang telah di daftarkan
  var match= routes.match(path);
  if(match)
  {
    // jika url dengan route yg ada cocok ...
    match.fn (req,res,match);
    res.end(" Match ");
  }
  else {
    // jika url dengan route tidak ada ...
    res.writeHead(404,{"Content-type":"text/plain"});
    res.end(" 404 - not found ");
  }


    // res.writeHead(code,{"Content-type":"text/plain"});
    // res.end(" Hello World ");

}).listen(8888);

console.log("server is running .....");
