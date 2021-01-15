let dobro = function (a) {
    return 2 * a
}

dobro = (a) => { // variável - parâmatro - => retorno com operação ou não
    return 2 * a
}

dobro = a => 2 * a //retun implícito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um parâmetro
console.log(ola())