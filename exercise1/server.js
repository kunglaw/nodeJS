var server = require("http"); // global module

server.createServer(engine).listen(1337); 

function engine(request, response){
    response.writeHead(200, {'Content-Type':'text/plain'} );
    response.end(" Hello World ");
}