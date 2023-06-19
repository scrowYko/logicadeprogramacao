function multiplicacao(a,b) 
{
    var nx = 0
    var resultado = 0
    while (nx < b)
    {
        resultado = resultado + a
        nx = nx + 1
    }
    return resultado
}

console.log(multiplicacao(3 , 10))