// Um novo modelo de carro, super econômico foi lançado.Ele faz 20 km com 1 litro de
// combustível.Cada litro de combustível custa R$ 5,00.
// Faça um programa que pergunte ao usuário quanto de dinheiro ele tem e em seguida
// diga quantos litros de combustível ele pode comprar e quantos kilometros o carro
// consegue andar com este tanto de combustível.
// Seu script será usado no computador de bordo do carro.

let disponivel = 100;

function calcularFuncionamento() {
  const calculoGasolina = disponivel / 5;
  const calculoKM = calculoGasolina;
  return `Com este montante disponível você poderá abastecer ${calculoGasolina}/litros e o carro andará ${calculoKM}/Km.`;
}

console.log(calcularFuncionamento(disponivel));
