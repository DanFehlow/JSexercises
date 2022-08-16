// Peça ao usuário para digitar várias idades. Exiba quantas pessoas são maior de
// idade (18 anos) e quantas são menores.

let idades = [10, 15, 17, 18, 20];
let maior = 0;
let menor = 0;

for (i = 0; i < idades.length; i++) {
  if (idades[i] >= 18) {
    maior++;
  } else menor++;
}

console.log(maior);
console.log(menor);
