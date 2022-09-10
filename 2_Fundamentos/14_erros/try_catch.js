// Vamos garantir uma resposta para o usuario 
const x = 10;

try {
  x = 2; // vamos tentar dar um novo valor para minha const, mas sabemos que isso nao e permitido 
} catch (err) {
  console.log(`Erro: ${err}`);
}