function inverterString(str) {
    let resultado = '';
    
    for (let indice = str.length - 1; indice >= 0; indice--) {
      resultado += str[indice];
    }
    
    return resultado;
}
  
const stringInformada = "Target Sistemas";
const stringInvertida = inverterString(stringInformada);
console.log("String original:", stringInformada);
console.log("String invertida:", stringInvertida);
  