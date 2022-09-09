// NOME

console.log(process.argv)

const args = process.argv.slice(2)

console.log(args)

const nome = args[0].split('=')[1] // Split - que vai dividir a String em duas partes quando tiver um igual 

console.log(nome)

const idade = args[1].split('=')[1] // Split - que vai dividir a String em duas partes quando tiver um igual 

console.log(idade)

console.log(` O nome dele eh ${nome} e ele tem ${idade} anos! `)