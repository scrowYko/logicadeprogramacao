function palindromo(p) {
  var teste = p.split("");
  var invertido = teste.reverse();
  var string = invertido.join("");
  var valor = false
  if (string == p) {
    valor = true;
  }
  console.log(p + " "+valor)
}
palindromo('ovo')