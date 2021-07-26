// -------------------- Repetição utilizando FOR ----------//

for(let i = 0; i < 5; i++){
  console.log(i)
}

// exemplo 2

let listaItens = ['Item1', 'Item2', 'Item3',]

for (let index = 0; index < listaItens.length; index++) {
  console.log(index)
}

// for of -> utilizado em strings e listas

let tecnologia = 'JAVASCRIPT'
for(let x of tecnologia){
  console.log(x)
}

let listaTecnologia =['Tecnologia1', 'Tecnologia2', 'Tecnologia3',]
for(let x of listaTecnologia){
  console.log(x)
}

// for in -> utilizado para objetos

let objetoPessoa = {
  nome: 'Rayron',
  idade: 25,
  profissao: 'Desenvolvedor'}

for(let x in objetoPessoa){
  console.log(objetoPessoa[x])
}