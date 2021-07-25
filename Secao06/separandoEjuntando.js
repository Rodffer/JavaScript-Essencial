// separando e juntando strings

let exemplo1 = 'Aprendendo a programar em JavaScript'

let separandoEmLista = exemplo1.split(' ')

console.log("🚀Separando", separandoEmLista)

let juntandoAfrase = separandoEmLista.join('-')
console.log("🚀 Juntando", juntandoAfrase)

let exemplo2 = exemplo1.split(' ').join('-').toLocaleUpperCase()

console.log(exemplo2)
