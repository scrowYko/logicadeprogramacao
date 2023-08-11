function paresArray(){
    var teste = [1, 2, 3, 4, 5, 6]
    var resposta = []
    teste.forEach(element => {
        if(element %2 == 0) {
            resposta.push(element)
        }
    })
    console.log(resposta);
}
paresArray()