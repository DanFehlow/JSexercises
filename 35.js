// - Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior
// que 10, caso
// Exercícios JS 4
// contrário escrever NÃO É MAIOR QUE 10!

// Utilizando o ifTernario

let number = 9;

function check() {
  const verificar = number > 10 ? "É maior que 10" : "Não é maior que 10";
  return verificar;
}

console.log(check(number));
