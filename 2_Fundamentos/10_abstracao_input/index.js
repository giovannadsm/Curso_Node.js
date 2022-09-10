const inquirer = require('inquirer')

inquirer // metodo responsavel por fazer as perguntas
  .prompt([
    { name: 'p1', message: 'Qual a primeira nota?' },
    { name: 'p2', message: 'Qual a segunda nota?' },
  ])
  .then((answers) => { // answers -- respostas
    console.log(answers) // imprima as respostas 
    const media = (parseInt(answers.p1) + parseInt(answers.p2)) / 2

    console.log(`A média do aluno é ${media}`)
  })
  .catch((err) => { // usado para imprimir a mensagem de erro 
    console.log(err)
  })