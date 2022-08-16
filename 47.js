// Faça um programa que leia 100 valores e no final, escreva o maior e o menor valor
// lido.
const valor = [0.9, 1, 2, 3, 4, 5, 6, 9, 24];

// Este operador ("...")faz com os itens sejam enviados um a um, podendo assim o JS definir qual é o maior e o menor número do array alvo
const min = Math.min(...valor);
const max = Math.max(...valor);
console.log(min);
console.log(max);
