// Classe construtora
class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar() // no browser da undefined

// Função Factory
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar() // no browser ele imprime João pois aqui ele sempre aponta para
            // o nome pois no contexto lexico ele trabalha sempre dentro da função
            