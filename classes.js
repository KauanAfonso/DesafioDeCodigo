class hero{
    constructor(nome,idade,tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    ataquesDoPersonagem(){
        return {
            ataque: [ "Magia","Espada", "Artes Marciais", "Shuriken"]
        }
    }

    atacar(){
        const chamarAtaques = this.ataquesDoPersonagem();
        const resultado = chamarAtaques.ataque

        if(this.tipo == "mago"){
            console.log(`o ${this.tipo} atacou usando ${resultado[0]}`)
        }else if(this.tipo == "guerreiro"){
            console.log(`o ${this.tipo} atacou usando ${resultado[1]}`)
        }else if(this.tipo == "monge"){
            console.log(`o ${this.tipo} atacou usando ${resultado[2]}`)
        }else{
            console.log(`o ${this.tipo} atacou usando ${resultado[3]}`)
        }
    }

}

let instanciar = new hero("Kauan", 28, "mago")
console.log(instanciar)
instanciar.atacar()