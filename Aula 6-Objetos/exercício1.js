const pessoa = {
    nome: "Thaís",
    idade: 19,
    altura: 1.69,
    temCNH: true,
    apelidos: ["mo do Gabs" , "tatai" , "santiago" , "Thai"]

}

let = textoCNH = "";

if(pessoa.temCNH){
    textoCNH = ('possui CNH')
} else{
    console.log('não possui cnh')
}


console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${textoCNH} e tem os seguintes apelidos: `)

for (let apelido of pessoa.apelidos){
    console.log(`-${apelido}`);
}