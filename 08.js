//  Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a
// média do aluno e dar o seguinte resultado:
// A mensagem "Aprovado", se a média alcançada for maior ou igual a sete; A
// mensagem "Reprovado", se a média for menor do que sete; A mensagem "Aprovado
// com Distinção", se a média for igual a dez.Calcular média de dois números

var primeiraNota = 10;
var segundaNota = 10;
const resultado = (primeiraNota + segundaNota).toFixed(2);

function verificarMedia() {
  if (resultado / 2 >= 7 && resultado / 2 < 10) {
    return "Você foi aprovado";
  }
  if (resultado / 2 < 7) {
    return "Você foi reprovado";
  }
  if (resultado / 2 == 10) return "Você foi aprovado com distinção";
}

console.log(verificarMedia(resultado));
