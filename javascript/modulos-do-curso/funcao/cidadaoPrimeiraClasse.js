// Função em JS é First-Class Object (Citizens)
// Higher-order function (Função de primeira ordem)
// Quando a função é tratada como um DADO
// Usado muito em programação Funcional

// criar de forma literal
function fun1() {

}

// armazenar em uma variável
// quando não damos nome na função ela se torna anônima
// chamando a constante e passando () ele vai invocar a função
// armaazenada nela
const fun2 = function () {

}

// armazenar em um array
// posso declarar diretamente a função, ou armazenar a função 
// literal, por exemplo fun1 e fun2 criada anteriormente
const array = [function (a, b) { return a + b}, fun1, fun2]
// para invocar passo o índice do array e o valores solicitados 
// pela função dentro do parenteses a + b
console.log(array[0](2, 3))

// armazenar em um atributo de objeto
const obj = {} // objeto vazio
obj.falar = function () { return 'Opa!'} // crio o atribuito falar dentro de obj
console.log(obj.falar())

// ou

const obj2 = {
    falar: function () {
        return 'Opa!'
    }
}

console.log(obj2.falar)

// passar a função como parametro
// para executar dentro de outra função
function run(fun) {
    fun()
}

run(function () { 
    console.log('Executando...')
})

// uma função pode retornar/conter uma função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

// como o resultado da função soma é uma função (a+b), 
// eu posso logo em seguida passar o valor solcitado 
// pela outra função(c)
soma(2, 3)(4)

// ou

// armazenar a primeira função em varável e depois usa a variável para 
// solicitar o outro valor
const cincoMais = soma(2, 3)
cincoMais(4)