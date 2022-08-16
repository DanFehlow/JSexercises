// Escreva um algoritmo para ler 10 números e ao final da leitura escrever a soma
// total dos 10 números lidos.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let soma = 0;

for (i = 0; i < numbers.length; i++) soma += numbers[i];

console.log(`A soma dos números informados é ${soma}`);
