
var http = require('http');
var tekstas = "Sveikas Pasauli!";
var rezultatas = tekstas.fontsize(15);

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end(rezultatas);
});


server.listen(8000);
console.log("Server listening on port 8000 :  http://127.0.0.1:8000/");