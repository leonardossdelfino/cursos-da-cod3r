console.log(Math.ceil(6.1)) // Arredonda para cima e "Flor" para baixo

const obj1 ={}
obj1.nome = 'Bola' // Adiciona nome ao objeto, dinamicamente 

console.log(obj1.nome)

function Obj (nome) {
    this.nome = nome // Quanto uso this, a chave fica pública, podendo ser usada fora da função
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)

obj3.exec()