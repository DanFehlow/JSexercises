// Dado o tamanho da base e da altura de um retângulo, calcular a sua área e o seu
// perímetro.

let base = 4;
let altura = 6;
const resultsPerimetro = 2 * (base + altura);
const resultsArea = base * altura;

function perimetro() {
  return resultsPerimetro;
}

function area() {
  return resultsArea;
}

console.log(
  `A área do retângulo é de ${area(
    resultsArea
  )}cm e o perímetro é de ${perimetro(resultsPerimetro)}cm.`
);
