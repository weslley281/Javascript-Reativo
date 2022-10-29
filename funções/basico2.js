function bomDia(){
    console.log("Bom dia");
}

const boaTarde = function(){
    console.log("Boa Tarde");
}

function executarQualqueCoisa(fn){
    console.log(typeof fn)
}

executarQualqueCoisa(3);
executarQualqueCoisa(bomDia);
executarQualqueCoisa(boaTarde);

//retornar uma função a aptir de outra

function potencia(base){
    return function(exp){
        return Math.pow(base, exp);
    }
}

const potencia2 = base => exp => Math.pow(base, exp);

const potenciaDe2 = potencia(2);

console.log(potenciaDe2(8));

console.log(potencia(3)(4));

console.log(potencia2(3)(4));


