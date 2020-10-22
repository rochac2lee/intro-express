var express = require("express");

/** Instancia o express */
var app = express();

app.get("/", function(request, response) {
    response.send("Olá Mundo Express!");
})



app.listen(8080, function() {
    console.log("Executando!");
});