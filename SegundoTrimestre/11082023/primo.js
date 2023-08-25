/*function primo(n) {
  parseInt(n);
  var teste = 1;
  while (teste <= n) {
    var divisores = 0;
    var candidato = 1;
    while (candidato <= n) {
      if (n % candidato == 0) {
        divisores++;
      }
      candidato++;
    }
    teste++;
  }
  if (divisores == 2) {
    console.log(n + " é primo");
  } else {
    console.log(n + " não é primo");
  }
}
primo(83);
*/

function primo2(numero){
  for (let i = 2; i < numero; i++) {
    if(numero %i == 0){
      return false
    }
    else{
      return true
    }
  }
}
console.log(primo2(5))