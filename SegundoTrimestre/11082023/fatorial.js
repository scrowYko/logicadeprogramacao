function fatorial(n){
    parseInt(n)
    var produto = n
    while (n > 1){
        n= n--
        produto *= n
    }
    console.log(produto)
}
fatorial(5)