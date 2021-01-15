function Pessoa() { // quando começa com letra maiuscula, é tipo um obj
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa