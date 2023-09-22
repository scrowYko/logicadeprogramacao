function bhaskara2(a,b,c){
    let delta = b**2 - 4*a*c
if (delta<0){
        return `Delta é negativo`
    }
    else if(delta==0){
        let x1 = (-b/(2*a))
        let x2 = (-b/(2*a))
        return `${x1} e ${x2}`
    }
    else{
        x1 = ((-b) + Math.sqrt(delta))/(2*a)
        x2 = ((-b) - Math.sqrt(delta))/(2*a)
        return `${x1} e ${x2}`
    }
}
console.log(bhaskara2(2, -5, -7))