function Pessoa() {
    this.idade = 0

    // esse this, é referenciando Pessoa, pois está dentro do
    // escopo de Pessoa
    const self = this 

    // setInterval é uma função de temporizador do JavaScript
    setInterval(function() {
        // usando o self aqui ele força que é idade de Pessoa
        // self é o this de Pessoa, ou seja é Pessoa
        // assim consigo pegar a idade da Pessoa
        self.idade++ 
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa // estou instânciando o objeto Pesso, crianado uma pessao