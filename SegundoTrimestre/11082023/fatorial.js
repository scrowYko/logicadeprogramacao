function fatorial(n){
    parseInt(n)
    var produto = n
    while (n > 1){
        n= n-1
        produto = produto * n
    }
    console.log(produto)
}
fatorial(5)