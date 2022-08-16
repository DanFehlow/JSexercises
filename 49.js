// Faça um algoritmo para ler 10 números e armazenar em um array. Após isto, o
// algoritmo deve ordenar os números no array em ordem crescente. Escrever o vetor ordenado.

const numbers = [
  20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
];

numbers.sort((numbers, ordem) => numbers - ordem);

console.log(numbers);

// // Se funcaoDeComparacao não for informado, os elementos serão ordenados de acordo com a sua conversão para texto e o texto comparado na pontuação unicode do texto convertido.
// Por exemplo, "cherry" vem antes de "banana".
// Em uma ordenação numérica, 9 vem antes de 80, mas porque os números são convertidos para texto e, "80" vem antes de "9" na ordenação Unicode.
