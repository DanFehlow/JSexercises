// - Ler 10 valores e escrever quantos desses valores lidos são NEGATIVOS

let numbers = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5];
let positives = 0;
let negatives = 0;

for (i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    negatives++;
  } else positives++;
}

console.log(positives);
console.log(negatives);
