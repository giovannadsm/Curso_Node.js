const x = 10;

//checar se x eh um numero

if (!Number.isInteger(x)) { // se x nao for inteiro eu vou apresentar o erro 
  throw new Error("O valor de x não é um número inteiro"); 
}

console.log('Continuando o codigo...')