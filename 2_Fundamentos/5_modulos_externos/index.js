const minimist = require ('minimist')

const args = minimist(process.argv.slice(2))

console.log(args)

const nome = args['nome']
const profissao = args ['profissao']

console.log( nome, profissao )

console.log(`O nome dele(a) eh ${nome} e a profissao dele(a) eh ${profissao}`)