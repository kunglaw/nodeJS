var http = require("http"); // karena module bawaan node js, maka tidak perlu
// memakai ./nama_file
var fs = require("fs");
var url = require("url");
var qString = require("querystring");


http.createServer(function(req,res){
  var code = 200;
  var file = "";
 // =================================
 var access = url.parse(req.url);
 var dt = qString.parse(access.query);

  console.log(access.pathname);

  if(access.pathname == "/contact")
  {
      file = "contact.html";
  }
  else if(access.pathname == "/contact_process")
  {
      if(req.method.toUpperCase() == "POST")
      {

        var datapost = "";
        req.on("data",function(chunck){
          datapost += chunck;
        });

        req.on("end",function(){
          var data_post = qString.parse(datapost);

          res.writeHead(200,{"Content-type":"text/plain"});
          res.end(JSON.stringify(data_post));
        });
          //console.log("Apa yang mau ditampilkan ? ");
          //res.writeHead(code,{"Content-type":"text/plain"});
          //res.end(" succeess submit ");
      }
      else {
        // METHOD GET
        file = "contact.html";
      }
  }
  else if(access.pathname == "/index" || access.pathname == "/" || access.pathname == '/home')
  {
      file = "index.html";
  }
  else {
      file = "404.html";
      code = 404;
  }

  //res.writeHead(200,{"Content-type":"text/plain"});
  //res.end("Hello node JS");

 // sementara
  res.writeHead(code,{"Content-type":"text/html"});
  fs.createReadStream("./lite/"+file).pipe(res);

  // load asset
  /* fs.creareReadStream("./template/css/bootstrap.css").pipe(res);
  fs.creareReadStream("./template/css/heroic-features.css").pipe(res);
  fs.creareReadStream("./template/fonts/glyphicons-halflings-regular.ttf").pipe(res);
  fs.creareReadStream("./template/js/bootstrap.min.js").pipe(res);
  fs.creareReadStream("./template/js/jquery.js").pipe(res);*/
  /*res.write("you request : "+req.url+"\n");
  res.write("Hello from Dimas");*/
  //res.end();
}).listen(8888);

console.log("server is running .....");
