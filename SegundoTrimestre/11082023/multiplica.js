function multiplica(a,b){
    var produto = 0
    var contador = 1
    while(contador <= b){
        produto += a
        contador++
    }
    console.log(produto)
}
multiplica(4,5)