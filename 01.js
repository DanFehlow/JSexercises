// Peça ao usuário para digitar 5 números em uma caixa de texto. Verifique qual é o
// maior número e exiba-o.

let num = [1, 2, 3, 4, 5, 6, 9, 24];

function verificarMaior() {
  let numMaior = 0;
  for (i = 0; i < num.length; i++) 
  if (num[i] > numMaior) numMaior = num[i];
  return numMaior;
}

console.log(verificarMaior(num));
