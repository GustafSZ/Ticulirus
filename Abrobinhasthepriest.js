class hero{
    constructor(Nome, idade, tipo, attack){
    this.Nome  = Nome
    this.idade = idade
    this.tipo = tipo
    this.attack = attack

    if(this.tipo === "ninja"){
        this.attack = "shuriken"}
    if(this.tipo === "mago"){
        this.attack = "fire ball"}
    if(this.tipo === "priest"){
        this.attack = "holy grail"}

    }
    escrever(){
        console.log(`O heroi ${this.Nome} tem ${this.idade} anos`)
    }
    atacar(){
        console.log(`O ${this.tipo} atacou com ${this.attack}`)

    }}
    let heroi = new hero("Abrobrinhas", 14, "priest")
    heroi.escrever()
    heroi.atacar()
