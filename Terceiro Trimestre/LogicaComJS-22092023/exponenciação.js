function expoente (a,b){
    let resposta = 1
    for (let contador = 1; contador <= b ; contador++) {
        resposta = resposta * a
    }
    return resposta
}
console.log(expoente(25,2))