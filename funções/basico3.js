const felizNatal = () => console.log("Feliz Natal");

felizNatal();

const saudacao = (nome) => "Fala " + nome + "!!!";
console.log(saudacao("Weslley"));

const saudacao2 = nome => `Oi ${nome} tudo bem`;
console.log(saudacao2("Weslley"));

const somar = (numeros) => {
    let total = 0;
    for(let n of numeros){
        total += n;
    }
    return total
}

console.log(somar([5,6,2,4,7]));

const somar2 = (...numeros) => {
    let total = 0;
    for(let n of numeros){
        total += n;
    }
    return total
}

console.log(somar2(5,6,2,4,7, 54));

//this
Array.prototype.log = function(){
    console.log(this);
}
const numeros = [1,2,3];
numeros.log();