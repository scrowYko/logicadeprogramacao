function fibonacci(Fn) {
  parseInt(Fn);
  var n1 = 1;
  var n2 = 0;
  var n = 0
  var resposta = [];
  resposta.push(n2,n1)
  if (Fn <= 2) {
    Fn = Fn - 1;
  } else {
    contador = 3;
    while (contador <= Fn) {
      n = n1 + n2;
      n2 = n1;
      n1 = n;
      resposta.push(n);
      contador++;
    }
  }

  console.log(resposta);
}
fibonacci(10);
