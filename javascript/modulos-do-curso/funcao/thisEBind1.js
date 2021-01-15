const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

// até aqui funciona normal, pois estou invocando a função falar() de pessoa
pessoa.falar()

// se eu for armazenar em váriavel a função o this se perde
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

// "amarrando" com o bind, ele sempre invoca de pesso.
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
