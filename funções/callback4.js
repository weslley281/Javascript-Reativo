const carrinho = [
    { nome: 'Anel Vibrador', Quantidade: 5, preco: 34.99 },
    { nome: 'Bolas da felcidade', Quantidade: 50, preco: 19.99 },
    { nome: 'supositório médio', Quantidade: 8, preco: 39.99 },
    { nome: 'Lubrificante', Quantidade: 100, preco: 24.99 },
    { nome: 'Chuca', Quantidade: 80, preco: 5.99 }
]

const getNome = item => item.nome;
const qtdeMaiorQueZero = item => item.Quantidade > 5;
const qtdeItensMuitoGrande = item => item.Quantidade >= 1000;

const nomeItensValidos = carrinho.filter(qtdeMaiorQueZero).map(getNome);
const itensValidos = carrinho.filter(qtdeMaiorQueZero);
const qtdeMaior = carrinho.filter(qtdeItensMuitoGrande);
 

console.log(itensValidos);
console.log(nomeItensValidos);
console.log(qtdeMaior);

Array.prototype.meuFilter = function(fn){
    const novoArray = [];

    for(let i = 0; i < this.length; i++){
        if(fn(this[i], i, this)){
            novoArray.push(this[i]);
        }
    }

    return novoArray;
}

const nomeItensValidos2 = carrinho.meuFilter(qtdeMaiorQueZero).map(getNome);
console.log(nomeItensValidos2);