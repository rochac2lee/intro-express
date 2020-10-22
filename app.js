var express = require("express");

/** Instancia o express */
var app = express();

/** Fornece a constante dirname para dizer o diretório atual do projeto */
var path = require("path");

app.get("/", function(request, response) {
    response.sendFile(__dirname + "/public/pages/index.html");
})



app.listen(8080, function() {
    console.log("Executando!");
});