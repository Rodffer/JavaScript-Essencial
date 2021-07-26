// -----------Condicionais Se e Se não (IF, ELSE, ELSE IF)---------//

// Condicionais -> Controlar erros / tratar informacoes de alguma maneira

// if -> Se
// else -> Se nao

// se a pessoa tem mais de 18 anos

let pessoa = {
  nome: 'Marcelo',
  idade: 18,
  peso: 65
}

if(pessoa.idade > 18){
  console.log(`${pessoa.nome} tem mais de 18`)
} else {
  console.log(`${pessoa.nome} nao tem mais de 18`)
}

// utilizando E &&

if(pessoa.idade >= 18 && pessoa.peso >= 60){
  console.log('A pessoa atende aos requisitos')
} else {
  console.log('A pessoa nao atende aos requisitos')
}

// utilizando o OU ||

if(pessoa.idade >= 18 || pessoa.peso >= 60){
  console.log('A pessoa atende aos requisitos')
} else {
  console.log('A pessoa nao atende aos requisitos')
}

// semaforo
// verde, vermelho, amarelo

let sinal = ''

if(sinal === 'Verde'){
  console.log('PODE PASSAR')
} else if(sinal === 'Vermelho'){
  console.log('PARE')
} else if(sinal === 'Amarelo'){
  console.log('ATENCAO')
}else {
  console.log('COMANDO NAO ENTENDIDO')
}
