function paresArray(teste){
    var resposta = []
    teste.forEach(element => {
        if(element %2 == 0) {
            resposta.push(element)
        }
    })
    console.log(resposta);
}
paresArray([1,2,3,4,5,6,7,8,9,10])