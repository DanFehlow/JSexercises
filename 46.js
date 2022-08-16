// Escreva um algoritmo para ler 10 números. Todos os números lidos com valor
// inferior a 40 devem ser somados. Escreva o valor final da soma efetuada.

let numbers = [1, 2, 3, 4, 5, 40, 41, 42, 43, 44];
let soma = 0;

for (i = 0; i < numbers.length; i++)
  if (numbers[i] < 40) {
    soma += numbers[i];
  }

console.log(`A soma dos números menores que 40 é ${soma}`);
