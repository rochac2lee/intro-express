var http = require("http");

var express = require("express");

// Instancia o express 
const app = express();

app.use((request, response, next) => {
    response.status(404).send();
})

const hostname = "127.0.0.1";
const port = "3000";

app.set("port", port);

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log('Conexão ativa!');
})




/* Cria um servidor node

var http = require("http");

const hostname = "127.0.0.1";
const port = "3000";

const server = http.createServer(function(req, res) {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Olá Mundo NodeJs");
}); 

server.listen(port, hostname, () => {
    console.log('Conexão ativa!');
})


// Com Express

var express = require("express");

// Instancia o express 
const app = express();

// Diz ao app que vai ser carregado arquivos estáticos 
app.use(express.static("public"));

// Fornece a constante dirname para dizer o diretório atual do projeto 
var path = require("path");

app.get("/", function(request, response) {
    response.sendFile(__dirname + "/public/pages/index.html");
})

app.get("/sobre", function(request, response) {
    response.sendFile(__dirname + "/public/pages/sobre.html");
})


app.listen(8080, function() {
    console.log("Executando!");
});

*/