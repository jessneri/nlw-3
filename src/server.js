//importar dependencia
const express = require("express");
const path = require("path");
//iniciando express
const server = express();
//utilizando arquivo estáticos
server.use(express.static("public"));

//criar rota
server.get("/", (request, response) => {
  return response.sendFile(path.join(__dirname, "views", "index.html"));
});

//ligar servidor
server.listen(5500);
