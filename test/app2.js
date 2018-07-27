 var http = require("http");
 
 http.createServer(function(req,res){
	 
	 res.writeHead(200,{"Content-type":"text/plain"});
	 res.end(" yes hafal "); 
	 
 }).listen(8888);