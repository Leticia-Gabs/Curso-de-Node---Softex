let readline = require('readline-sync')

console.log("------=== FORMULÁRIO ===------")

let nome = readline.question("Digite seu nome: ")
let dia = readline.question("Dia do nascimento: ")
let mes = readline.question("Mês do nascimento: ")
let ano = readline.question("Ano do nascimento: ")
let telefone = readline.question("Número de seu telefone: ")
let maioridade = readline.question("Você é maior de idade?")
let temAnimal = readline.question("Tem animal em casa? (sim/nao): ")


if (temAnimal== "sim") {
    qtdAnimais = readline.question("Quantos animais você tem? ")
}



console.log("\n---=== DADOS DO USUÁRIO ===---")
console.log("Nome:", nome)
console.log("Data de Nascimento:", dia + "/" + mes + "/" + ano)
console.log("Telefone:", telefone)
console.log("É maior de idade:", maioridade)
console.log("Tem animal em casa?", temAnimal)
if (qtdAnimais == "sim") {
    console.log("Quantidade de animais:", qtdAnimais)
}
