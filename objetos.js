class formaDeBolo{
    constructor(sabor, recheio){
    this.massa = sabor
    this.recheio = recheio
    }
    escrever(){
    console.log(`Um delicioso bolo de ${this.massa} com recheio de ${this.recheio}`)


    }
    assar(){
        console.log("bolo assando de: " + this.massa)
    }
}
let boloFesta = new formaDeBolo("chocolas", "nutelinhas")
boloFesta.escrever()
boloFesta.assar()