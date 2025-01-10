function verificarSequenciaFibonacci(numero) {
    let a = 0, b = 1;
  
    if (numero === 0 || numero === 1) {
      return `O número ${numero} pertence à sequência de Fibonacci.`;
    }
  
    while (b < numero) {
      let valorTemporario = b;
      b = a + b;
      a = valorTemporario;
    }
  
    if (b === numero) {
      return `O número ${numero} pertence à sequência de Fibonacci.`;
    } else {
      return `O número ${numero} não pertence à sequência de Fibonacci.`;
    }
}
  
const numeroInformado = 4; 
console.log(verificarSequenciaFibonacci(numeroInformado));
  