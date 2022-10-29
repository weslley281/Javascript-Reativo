const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'dados.txt');

console.log("daqui a pouco");

function exibirConteudo(erro, conteudo){
    console.log(conteudo.toString());
}

fs.readFile(caminho, {}, exibirConteudo);

fs.readFileSync()
//console.log(caminho);