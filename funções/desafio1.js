function calcular(tipo = somar){
    if(tipo == "somar"){
        return function(n1, n2){
            return n1 + n2;
        }
    }else if(tipo == "subtrair"){
        return function(n1, n2){
            return n1 - n2;
        }
    }else if(tipo == "dividir"){
        return function(n1, n2){
            return n1 / n2;
        }
    }else if(tipo == "multiplicar"){
        return function(n1, n2){
            return n1 * n2;
        }
    }else if(tipo == "potencia"){
        return function(n1, n2){
            return Math.pow(n1, n2);
        }
    }
}

console.log(calcular("somar")(4,4));
console.log(calcular("multiplicar")(4,4));
console.log(calcular("dividir")(4,4));
console.log(calcular("subtrair")(4,4));
console.log(calcular("potencia")(4,4));