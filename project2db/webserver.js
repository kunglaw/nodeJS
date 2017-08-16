var http = require("http");
var url  = require("url");
var view = require("swig");
var routes = require("routes")();
var mysql  = require("mysql");
var connection = mysql.createConnection({
	host:"localhost",
	port : "3306",
	database:"project2db",
	user : "root",
	password : ""
	
});

routes.addRoute("/insert",function(req,res){
	
	connection.query("INSERT INTO mahasiswa set ?",{
		nama:"Muhammad Abraham",
		nim:1200463627,
		email:"bram.abe@gmail.com",
		alamat:"jl. depok raya"
		
	},function(err,field){
		
		if(err) throw err;
		
		
	});
	
});

routes.addRoute("/test_db",function(req,res){
	
	connection.query("SELECT * FROM mahasiswa",function(err,rows,field){
		if(err) throw err;
		
		var html = view.compileFile("./views/mahasiswa.html");
	    var mhs = [];
		
		var dt_row = JSON.stringify(rows) ; // WAJIB 
		
		/* rows.forEach(function(item){
			
			//console.log(JSON.stringify(item));
			var itemdt = JSON.stringify(item);
			//console.log(itemdt);
			mhs.push(itemdt);
		});*/
		

		
		var output = html({
			mhs_dt:JSON.parse(dt_row)
		});
		
		res.writeHead(200,{"Content-Type":"text/html"});
		res.end(output);
	});
	
});

routes.addRoute("/",function(req,res){
	
	var html = view.compileFile("./views/index.html")();
	
	res.writeHead(200,{"Content-Type":"text/html"});
	res.end(html);
	
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
			var template = view.compileFile("./views/404page.html")();
			res.writeHead(200,{"content-type":"text/html"});
			res.end(template);
		}
	
	
	
}).listen(7777);

console.log("server is activated");