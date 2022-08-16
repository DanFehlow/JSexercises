//  Faça um programa que entre com cinco números e imprima o quadrado de cada
// número.

let numbers = [1, 2, 3, 4, 5];
let quadrado = numbers.map(function (item) {
  return Math.pow(item, 2);
});

console.log(quadrado);
