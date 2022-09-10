const EventEmitter = require('events') // eventemitter -- é responsável por manipular os eventos criados usando o módulo 'events' 
const eventEmitter = new EventEmitter()

eventEmitter.on('start', () => { // Os eventos são criados para fazer operações personalizadas enquanto um conjunto de operações é executado
  console.log('Durante')
})

console.log('Antes')

eventEmitter.emit('start')

console.log('Depois')