const prompt = require("prompt-sync")({sigint: true})
let heroi = prompt("Nome do heroi: ")
let XP = Number(prompt("Valor XP: "))
if(XP <= 1000){
console.log("O heroi de nome " + heroi + " está no nivel de ferro" )
}
if(XP >= 1001 && XP <= 2000){
console.log("O heroi de nome " + heroi+ " está no nivel de ferro" )
}
if(XP >= 2001 && XP <= 5000){
console.log("O heroi de nome " + heroi + " está no nivel de ferro" )
}
if( XP >= 5001 && XP <= 7000){
console.log("O heroi de nome " + heroi + " está no nivel de ferro" )
}
if( XP >= 7001 && XP <= 8000){
console.log("O heroi de nome " + heroi + " está no nivel de ferro" )
}
    