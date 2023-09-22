function Simples(c,i,t){
    let J= (c*((i/100)*t))
    let M = c+J
    return `${M}`
}
console.log(Simples(400 , 5 , 2))

function Composto(C,I,n){
    let mc= C*((1+(I/100))**n)
    return mc.toFixed(2)
}
console.log(Composto(2000, 3, 4))