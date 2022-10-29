function somar(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}

const somarAB = somar(3)(4);
console.log(somarAB(13));
console.log(somar(13)(20)(13));

function calcular(x){
    return function(y){
        return function(fn){
            return fn(x, y)
        }
    }
}

function subtrair(a, b){
    return a - b;
}

function multiplicar(a, b){
    return a * b;
}

const r1 = calcular(10)(5)(subtrair);