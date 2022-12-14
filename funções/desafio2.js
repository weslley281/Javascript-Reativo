const carrinho = [
  { nome: 'Anel Vibrador', quantidade: 5, preco: 34.99, fragio: false },
  { nome: 'Bolas da felcidade', quantidade: 50, preco: 19.99, fragio: false },
  { nome: 'supositório médio', quantidade: 8, preco: 39.99, fragio: false },
  { nome: 'Lubrificante', quantidade: 100, preco: 24.99, fragio: true },
  { nome: 'Chuca', quantidade: 80, preco: 5.99, fragio: true },
];

const media = carrinho
  .filter((item) => item.fragio)
  .map((item) => item.quantidade * item.preco)
  .reduce(
    (acc, el) => {
      const novaQtde = acc.qtde + 1;
      const novoTotal = acc.total + el;
      return { qtde: novaQtde, total: novoTotal, media: novoTotal / novaQtde };
    },
    { qtde: 0, total: 0, media: 0 }
  ).media;

console.log(media);
