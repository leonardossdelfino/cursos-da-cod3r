// função construtora parece uma classa em Java.
// crio ela com a primeira letra maiúscula e passao os parametros
// neste caso estou passando o valor de parametro padrão também
function Carro(velocidadeMaxima = 200, delta = 5) {
    
    // atributo privado, uso let para declarar
    let velocidadeAtual = 0

    // método público, uso this. para declarar, e poder usar fora da função
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta // velocidadeAtual = velocidadeAtual + delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // método público
    this.getVelocidadeAtual = function () { // para pegar a velocidade
        return velocidadeAtual              // o get é padrão de nomes
    }
}

const uno = new Carro // criando o objeto Carro
uno.acelerar() // usando função pública acelerar do Carro
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20) // passando parametros diferentes
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

// mostrando tipos
console.log(typeof Carro) // função 
console.log(typeof ferrari) // objeto.
