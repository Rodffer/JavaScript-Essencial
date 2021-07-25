// separando casas decimais e substituindo caractes

let numero1 = 351.334569

console.log(numero1.toFixed(2))

let numero2 = 1000.977788899

console.log(numero2.toFixed(2))

let numero3 = 1500.99999

console.log(numero3.toFixed(2).replace('.', ','))

let exemplo1 = 'Hoje esta frio'

console.log(exemplo1)
console.log(exemplo1.replace('frio', 'quente'))