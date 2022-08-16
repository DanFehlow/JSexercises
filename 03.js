// Calcule a média de diversas notas digitadas pelo usuário.

let notas = [8, 6, 9];
let soma = 0;

function media() {
  for (i = 0; i < notas.length; i++) soma += notas[i];
  return (soma / notas.length).toFixed(2);
}
console.log(`A média do aluno no período é de ${media(soma)}`);
