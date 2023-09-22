/*function vogal(string) {
  var recebe = string.split("");
  var contar = 0;
  recebe.forEach((element) => {
    if (element == "a") {
      contar++;
    } else if (element == "e") {
      contar++;
    } else if (element == "i") {
      contar++;
    } else if (element == "o") {
      contar++;
    } else if (element == "u") {
      contar++;
    } else if (element == "A") {
      contar++;
    } else if (element == "E") {
      contar++;
    } else if (element == "I") {
      contar++;
    } else if (element == "O") {
      contar++;
    } else if (element == "U") {
      contar++;
    }
  });
  console.log(contar);
}
vogal("pneumoultramicroscopicossilicovulcanoconiotico");
*/
function vogal2(palavra){
  var split =  palavra.split("")
  var cont = 0 
  var vogais = "aeiouAEIOU"
  split.forEach(element => {
    if (vogais.includes(element)){
      cont ++
    }
  });
  console.log(cont)
}
vogal2('banana')
vogal2('maça')