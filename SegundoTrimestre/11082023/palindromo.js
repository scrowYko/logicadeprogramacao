function palindromo(p) {
  var teste = p.split("");
  var invertido = teste.reverse();
  var string = invertido.join("");
  var valor = "não é palindromo"
  if (string == p) {
    valor = "é palindromo";
  }
  return `A palavra "${p}", ${valor}`
}
console.log(palindromo('aka'))