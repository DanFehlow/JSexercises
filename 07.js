// Faça um script que verifique se uma letra digitada num campo de input é vogal ou
// consoante.

let letraDigitada = "b";
const vogais = ["a", "e", "i", "o", "u"];

function verificarLetra() {
  if (vogais.indexOf(letraDigitada.toLocaleLowerCase()) !== -1) {
    return "Vogal";
  } else {
    return "Consoante";
  }
}

// O método indexOf() retorna o índice da primeira ocorrência do valor fornecido.Retorna -1 se o valor não for encontrado.
verificarLetra();
console.log(verificarLetra(letraDigitada));
