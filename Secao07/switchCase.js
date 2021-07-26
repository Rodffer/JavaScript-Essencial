//--------------------- Switch Case --------------------//

// calculadora

function calculadora(numero1, operador, numero2){ 
  let resultado
  switch (operador) {
    case '+':
      resultado = numero1 + numero2
      console.log(resultado)
      break;
    case '-':
      resultado = numero1 - numero2
      console.log(resultado)
      break;
    case '*':
      resultado = numero1 * numero2
      console.log(resultado)
      break;
    case '/':
        resultado = numero1 / numero2
        console.log(resultado)
      break;
  
    default:
      console.log('Comando invalido!')
      break;
  }
}

calculadora(5, '+', 10)
calculadora(5, '-', 10)
calculadora(5, '*', 10)
calculadora(5, '/', 10)
calculadora(5, '', 10)
