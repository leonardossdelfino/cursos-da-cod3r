function Pessoa() {
    this.idade = 0

    const self = this // esse this, é Pessoa
    // setInterval é uma função de temporizador do JavaScript
    setInterval(function() {
        self.idade++ // usando o self aqui ele força que é idade de Pessoa
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa // estou instânciando o objeto Pesso, crianado uma pessao