const readline = require("readline").createInterface({
    input: process.stdin, // entrada de dados
    output: process.stdout,// saida de dados
  });
  
  readline.question(`Qual a sua linguagem preferida? `, (language) => {
    console.log(`A minha linguagem preferida é: ${language}`);
    readline.close();
  });