// spread ...


const pessoa = {
    nome: "Thaís",
    idade: 19,
    cidade: "Salvador",
    profissao:"Publicitária"
}; 

const endereco = {
    rua: "Jardim Botânico",
    numero: 10,
    bairro: "Jardim Botânico",
};

const objetoFundido = {
   ...pessoa,
   ...endereco
}
console.log(objetoFundido)