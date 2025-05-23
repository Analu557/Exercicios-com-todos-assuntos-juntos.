function somaPares(array) {
  return array.reduce((acc, num) => {
    if (num % 2 === 0) {
      return acc + num;
    }
    return acc;
  }, 0);
}

function palavrasComMaisDe4Letras(arrayPalavras) {
  return arrayPalavras.filter(palavra => palavra.length > 4);
}

function contarOcorrencias(array, numero) {
  return array.reduce((contador, item) => {
    if (item === numero) {
      return contador + 1;
    }
    return contador;
  }, 0);
}

function multiplicarArray(array, multiplicador) {
  return array.map(num => num * multiplicador);
}

function inverterPalavras(frase) {
  return frase.split(' ').reverse().join(' ');
}