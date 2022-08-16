let num = [1, 2, 24];

function verificarMaior() {
  let numMaior = 0;
  for (i = 0; i < num.length; i++) if (num[i] > numMaior) numMaior = num[i];
  return numMaior;
}

console.log(`O número maior é ${verificarMaior(num)}`);
