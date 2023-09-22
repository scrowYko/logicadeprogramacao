function arredonda(numero){
    var arr = numero.toFixed(2)
    return `R$${arr.replace('.', ',')}`
}
console.log(arredonda(0.30000000000000004))
