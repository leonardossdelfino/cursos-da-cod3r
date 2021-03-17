const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

// até aqui funciona normal, pois estou invocando a função falar() de pessoa
pessoa.falar()

// se eu for armazenar em váriavel a função o this se perde
// por que This desse contexto é outro, ele gera undefined
const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e OO

// com o bind, eu posso escolher o objeto que quero pegar 
// no caso estou pegando falar, de pessoa
// então ele consegue pegar o this relacionado ao obj pessoa.
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
