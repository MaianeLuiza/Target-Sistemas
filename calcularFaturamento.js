const fs = require('fs');

function calcularFaturamento(dados) {
  let menorValor = null;
  let maiorValor = null;
  let somaFaturamento = 0;
  let diasComFaturamento = 0;

  dados.forEach(dia => {
    const faturamento = dia.valor; 
    if (faturamento > 0) {
      if (faturamento < menorValor) menorValor = faturamento;
      if (faturamento > maiorValor) maiorValor = faturamento;

      somaFaturamento += faturamento;
      diasComFaturamento++;
    }
  });

  const mediaMensal = somaFaturamento / diasComFaturamento;

  let diasAcimaDaMedia = 0;
  dados.forEach(dia => {
    if (dia.valor > mediaMensal) {
      diasAcimaDaMedia++;
    }
  });

  return {
    menorValor,
    maiorValor,
    diasAcimaDaMedia
  };
}


fs.readFile('dados.json', 'utf8', (err, data) => {
  if (err) {
    console.log('Erro ao ler o arquivo:', err);
    return;
  }

  const dados = JSON.parse(data);
  
  const resultados = calcularFaturamento(dados);
  console.log(`Menor valor de faturamento: R$ ${resultados.menorValor}`);
  console.log(`Maior valor de faturamento: R$ ${resultados.maiorValor}`);
  console.log(`Número de dias com faturamento superior à média mensal: ${resultados.diasAcimaDaMedia}`);
});
