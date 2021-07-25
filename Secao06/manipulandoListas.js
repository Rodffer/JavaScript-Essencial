// manupular listas - array - vetor

let listaPessoas = [
  {nome: 'Jose', idade: 25},
  {nome: 'Maria', idade: 33},
  {nome: 'Joao', idade: 18}
]

console.log(listaPessoas)

// filtrar e mapear itens especificos da lista
console.log(
listaPessoas
.filter((pessoa) => pessoa.idade > 18)
.map((pessoa) => pessoa.nome)
)

// adicionar itens ao final da lista

listaPessoas.push({
  nome: 'Rayron',
  idade: 25 
})

// adicionar itens ao inicio da lista

listaPessoas.unshift({
  nome: 'Antonio',
  idade: 40 
})

// remover itens da lista

// remover do final da lista
listaPessoas.pop()

// remover do inicio da lista

listaPessoas.shift()

console.log(listaPessoas)