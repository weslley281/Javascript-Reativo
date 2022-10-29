const nums = [1,2,3,4,5];
const dobro = n => n * 2;
console.log(nums.map(dobro));

const nomes = ['vampeta', 'tomasTurbanoPinto', 'quiko', 'zinho', 'branco', 'lindo'];
const primeiraLetra = texto => texto[0];
console.log(nomes.map(primeiraLetra));

const carrinho = [
    { nome: 'Anel Vibrador', Quantidade: 5, preco: 34.99 },
    { nome: 'Bolas da felcidade', Quantidade: 50, preco: 19.99 },
    { nome: 'supositório médio', Quantidade: 8, preco: 39.99 },
    { nome: 'Lubrificante', Quantidade: 100, preco: 24.99 },
    { nome: 'Chuca', Quantidade: 80, preco: 5.99 }
]

const getNome = produto => produto.nome;
console.log(carrinho.map(getNome));

const getTotal = item => item.Quantidade * item.preco;
const totais = carrinho.map(getTotal);
console.log(totais);