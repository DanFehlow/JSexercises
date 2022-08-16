// - Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior
// dele

let numOne = 5;
let numTwo = 2;

function verificarMaior() {
  const results = numOne > numTwo ? numOne : numTwo;
  return results;
}

console.log(`O número maior dos dois inputs é o ${verificarMaior()}`);
