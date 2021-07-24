// trablhando com funcoes

// serve para agrupar e reutilizar codigo em diversos trexos

function geraFrases() {
  console.log('Os 3 caminhos para o sucesso')
  console.log('Ensinar o que se sabe; generosidade mental')
  console.log('Praticar o que se ensina; coerência ética.')
  console.log('Perguntar o que se ignora; humildade intelectual')
}

geraFrases()

function geraNome(nome, idade) {
  console.log(nome, idade)
}

let exemplo1 = 'Rayron'
let exemplo2 = 25

geraNome(exemplo1, exemplo2)


// funcao anonima 
const soma = function(a, b) {
  console.log(a +b)
}

soma(5, 2)

const soma2 = function(x, y){
  resultado = x + y

  return resultado
}

soma2(15, 2)

console.log(resultado)

