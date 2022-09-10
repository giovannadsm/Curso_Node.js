const fs = require("fs");

console.log("Início");

fs.writeFile("arquivo.txt", "Oi", function (err) { //  o código continue progredindo e em um ponto futuro obtém a resposta da execução assíncrona;
  setTimeout(function () {
    console.log("Arquivo criado!");
  }, 1000);
});

console.log("Fim");
