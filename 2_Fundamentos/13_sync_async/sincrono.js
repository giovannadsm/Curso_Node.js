const fs = require("fs");

console.log("Início");

fs.writeFileSync("arquivo.txt", "Oi"); // eu dependo que e essa linha seja escrita, para eu poder executar o resto do programa 

console.log("Fim");