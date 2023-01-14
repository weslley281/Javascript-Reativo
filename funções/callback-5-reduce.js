const carrinho = [
  { nome: 'Anel Vibrador', Quantidade: 5, preco: 34.99 },
  { nome: 'Bolas da felcidade', Quantidade: 50, preco: 19.99 },
  { nome: 'supositório médio', Quantidade: 8, preco: 39.99 },
  { nome: 'Lubrificante', Quantidade: 100, preco: 24.99 },
  { nome: 'Chuca', Quantidade: 80, preco: 5.99 },
];

const getTotal = (item) => item.Quantidade * preco;
const somar = (acc, el) => {
  return acc + el;
};

const totalGeral = carrinho.map(getTotal).reduce(somar, 0);

console.log(totalGeral);

Array.prototype.meuReduce = function (fn, initial) {
  let acc = initial;

  for (let i = 0; i < this.length; i++) {
    if (!acc && i === 0) {
      acc = this[i];
    } else {
      acc = fn(acc, this[i], i, this);
    }
  }

  return acc;
};

const totalGeral2 = carrinho.map(getTotal).reduce(somar, 0);

console.log(totalGeral2);
