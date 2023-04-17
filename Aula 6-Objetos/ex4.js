const produtosConsumidos =[
    {
        nomeDoProduto: "Batata Frita",
        precoUnitario: 2000,
        quantidadeComprada: 1
    },
    {
        nomeDoProduto: "Cerveja",
        precoUnitario: 1000,
        quantidadeComprada: 6
    
    },
    {
        nomeDoProduto: "Água",
        precoUnitario: 600,
        quantidadeComprada: 3
    
    }

]

const comanda ={
    
    nomeDoCliente: "Gabriel",
    idadeDoCliente: 21,
    produtosConsumidos
}


console.log(comanda.nomeDoCliente)
console.log(comanda.idadeDoCliente)
comanda.idadeDoCliente= 20
console.log(comanda.idadeDoCliente)
console.log(comanda.produtosConsumidos[0].nomeDoProduto)
console.log(comanda.produtosConsumidos[produtosConsumidos.length -1].precoUnitario)