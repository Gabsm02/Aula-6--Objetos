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
    
    nomeDoCliente: "Thaís",
    idadeDoCliente: 21,
    produtosConsumidos
          
}

let totalAPagar = 0

for(produtos of produtosConsumidos){
    totalAPagar += produtos.precoUnitario * produtos.quantidadeComprada
}

let totalAPagarFormatado = (totalAPagar/100).toFixed(2)


//console.log(`Olá senhora ${comanda.nomeDoCliente} pelo produtos ${produtosConsumidos} a senhora precisará pagar um total de `)

console.log(`Sra(a) ${comanda.nomeDoCliente}, o total a pagar é R$ ${totalAPagarFormatado} reais`)