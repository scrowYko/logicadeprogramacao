function somaIntervalo(a,b){
    var intervalo = 0
    while(a<=b){
        if(a %2 == 0){
            intervalo = intervalo + a
        }
        a++
    }
    console.log(intervalo)
}
somaIntervalo(1,10)