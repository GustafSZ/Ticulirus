

var prompt = require('prompt-sync')({
    history: require('prompt-sync-history')() 
  })


saldo(vitorias = prompt("Quantidade de vitórias: "), derrotas = prompt("Quantidade de derrotas: "))
function saldo(derrotas, vitorias){
    let resultado = Number(vitorias - derrotas)
    console.log("saldo:" + resultado)
    if(resultado <= 10){
    console.log("Nivel Ferro")
    }

    if(resultado >= 11 && resultado<= 20){
    console.log("Nivel Bronze")

    }
    if(resultado >= 21 && resultado<= 50){
    console.log("Nivel Prata")

    }
    if(resultado >= 51 && resultado<= 80){
    console.log("Nivel Ouro")

    if(resultado >= 81 && resultado<= 90){
    console.log("Nivel Dima")
    }
    if(resultado >= 91 && resultado<= 100){
    console.log("Nivel Lendário")
    }
    if(resultado >= 101 ){
    console.log("Nivel Imortal")
    }
    
    }
}
