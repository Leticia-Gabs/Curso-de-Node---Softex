let readline = require('readline-sync')

let nome = readline.question("Qual o seu nome?")

switch (nome){
    case "Gabi":
        console.log("Tudo bem Gabi?")
        break;
    case "Cecilia":
        console.log("Tudo bem Cecilia?")
        break;
    case "Debora":
        console.log("Tudo bem Debora?")
        break;
    default: console.log("Infelizmente você não está na lista.")
}