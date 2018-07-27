
	
	var http = require("http");
	var url  = require("url");
	var routes = require("routes")();
	var view = require("swig");
	
	routes.addRoute("/",function(req,res){
		
		var html = view.compileFile("./views/index.html")();
		res.writeHead(200,{"Content-Type":"text/html"});
		res.end(html);
	});
	
	routes.addRoute("/profile",function(req,res){
		
		var template = view.compileFile("./views/profile.html");
		var output = template({
			
			name:"Aries Dimas Yudhistira",
			region:"DKI JAKARTA",
			skill_dt:["PHP","HTML","CSS","Javascript","NodeJS","Jquery"]
			
		});
		
		res.writeHead(200,{"Content-Type":"text/html"});
		res.end(output);
		
	});
	
	http.createServer(function(req,res){
	
		var path = url.parse(req.url).pathname;
		var match = routes.match(path);
		
		
		
		if(match)
		{
			match.fn(req,res);
			
		}
		else
		{
			res.writeHead(200,{"content-type":"text/plain"});
			res.end("server is good");
		}
		
	
	}).listen(5858);
	
	console.log("sounds good to me ");
