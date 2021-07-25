// Manipulacao de dados

// convertendo dados


// convertendo string em number
let exemplo1 = '1234'
console.log(exemplo1);
console.log(typeof exemplo1);

console.log(Number(exemplo1))
console.log(typeof Number(exemplo1))

// convertendo number em string

let exemplo2 = 2022
console.log(exemplo2)
console.log(typeof exemplo2)

console.log(String(exemplo2))
console.log(typeof String(exemplo2))

// exemplo pratico

let numero1 = 15
let numero2 = '5'

console.log('Numero 1', typeof numero1)
console.log('Numero 2', typeof numero2)

// dessa maneira apenas ira concatenar as duas variaveis
console.log('Concatenou ->', numero1 + numero2)

// dessa maneira ira somar as duas variaveis

console.log('Soma ->', Number(numero1) + Number(numero2))