function Recebe(a,b,c){
    if(a==b & a==c & b==c){
        return `este triângulo é Equilátero`
    }
    else if(a==b || a==c || c==b){
        return `este triângulo é isosceles`
    }
    else{
        return `este triangulo é escaleno`
    }
}

console.log(Recebe(4,4,4))