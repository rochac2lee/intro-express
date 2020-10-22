var express = require("express");

/** Instancia o express */
var app = express();

/** Diz ao app que vai ser carregado arquivos estáticos */
app.use(express.static("public"));

/** Fornece a constante dirname para dizer o diretório atual do projeto */
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