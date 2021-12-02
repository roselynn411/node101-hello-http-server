// write your code here

//created a server
const http = require('http');
const port = 8080;


//Creating a server object
const server = http.createServer(function(req, res){
    console.log('Received' + req.method + ' request for:' + req.url);

    //send headers
    res.writeHead(200, {'Content-Type': 'text/plain'});

   

    //send body response When the port is accessed, it responds with Hello World
    res.end('Hello World');
});


//Listen for incoming connections.
server.listen(8080, 'localhost', null, function (){
    //log a messafe that the server is listening and port
    console.log('Server is listening on localhost:8080');
});