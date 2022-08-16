// Forneça a temperatura em graus Fahrenheit, seu programa deve converter para
// Celsius e exibir na tela a temperatura em graus Celsius.

let grauFahrenheit = 100;

function conversor() {
  const temperaturaTratada = (grauFahrenheit - 32) / 1.8;
  return temperaturaTratada.toFixed(2);
}

console.log(conversor(grauFahrenheit));
