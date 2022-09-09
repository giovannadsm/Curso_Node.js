// mais de um valor

const x = 10
const y = 'Maycon'
const z = [1,2]

console.log(x, y, z)

// contagem de impressoes

console.count(`O valor de x eh: ${x}, contagem`) // Count -- faz a contagem
console.count(`O valor de x eh: ${x}, contagem`)
console.count(`O valor de x eh: ${x}, contagem`)
console.count(`O valor de x eh: ${x}, contagem`)
console.count(`O valor de x eh: ${x}, contagem`)
console.count(`O valor de x eh: ${x}, contagem`)
console.count(`O valor de x eh: ${x}, contagem`)
console.count(`O valor de x eh: ${x}, contagem`)
console.count(`O valor de x eh: ${x}, contagem`)
console.count(`O valor de x eh: ${x}, contagem`)

// variavel entre string

console.log('O nome eh %s, ele eh programador', y) // %s --- String

// limpar o console

setTimeout(() => {
    console.clear()  // setTimeout -- funcao que executa apos um tempo 
}, 2000)