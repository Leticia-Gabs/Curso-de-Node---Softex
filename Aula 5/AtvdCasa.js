const readline = require('readline-sync');

console.log("------=== FORMULÁRIO ===------");

let nome = readline.question("Digite seu nome: ");
let dia = readline.question("Dia do nascimento: ");
let mes = readline.question("Mês do nascimento: ");
let ano = readline.question("Ano do nascimento: ");
let telefone = readline.question("Número de seu telefone: ");
let temAnimal = readline.question("Tem animal em casa? (sim/nao): ");
let qtdAnimais = "";

if (temAnimal== "sim") {
    qtdAnimais = readline.question("Quantos animais você tem? ");
}

idade = 2025 - ano
 if(idade >= 18){
    maioridade=="sim"
 }else{
    maioridade=="nao"
 }

console.log("\n=== DADOS DO USUÁRIO ===");
console.log("Nome:", nome);
console.log("Data de Nascimento:", dia + "/" + mes + "/" + ano);
console.log("Telefone:", telefone);
console.log("Idade:", idade);
console.log("É maior de idade?", maiorIdade);
console.log("Tem animal em casa?", temAnimal);
if (qtdAnimais !== "") {
    console.log("Quantidade de animais:", qtdAnimais);
}
