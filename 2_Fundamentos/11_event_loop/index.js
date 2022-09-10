//Order c -> a -> b
function a() {
    console.log('Executando a()')
  }
  
  function b() {
    console.log('Executando b()')
  }
  
  function c() {
    console.log('Executando c()')
    a()
    b()
  }
  
  c()

  //event loop -- ele garante que a execucao do codigo seja sequencial 