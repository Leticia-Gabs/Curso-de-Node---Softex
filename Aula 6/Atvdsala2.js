let readline = require('readline-sync')

console.log("-----Calculadora-----")

let num1= Number(readline.question("Digite o primeiro numero:"))
let num2= Number(readline.question("Digite o segundo numero:"))

console.log("Case 1 - soma")
console.log("Case 2 - subtracao")
console.log("Case 3 - multiplicacao")
console.log("Case 4 - Divisao")

let operacao= readline.question("Escolha uma das operacoes acima:")

switch(operacao){
    case "1": console.log("Seu resultado é:", num1 + num2)
    break;
    case "2": console.log("Seu resultado é:", num1 - num2)
    break;
    case "3": console.log("Seu resultado é:", num1 * num2)
    break;
    case "4": console.log("Seu resultado é:", num1 / num2)
    break;

}