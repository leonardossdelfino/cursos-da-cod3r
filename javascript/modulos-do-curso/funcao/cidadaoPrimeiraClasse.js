// Função em JS é First-Class Object (Citizens)
// Higher-order function (Função de primeira ordem)

// criar de forma literal
function fun1() {

}

// armazenar em uma variável
// quando não damos nome na função ela se torna anônima
const fun2 = function () {

}

// armazenar em um array
const array = [function (a, b) { return a + b}, fun1, fun2]
// para invocar passo o índice do array e o valores solicitados pela função a + b
console.log(array[0](2, 3))

// armazenar em um atributo de objeto
const obj = {} // objeto vazio
obj.falar = function () { return 'Opa!'} // crio o atribuito falar dentro de obj
console.log(obj.falar())

// passar a função como parametro
function run(fun) {
    fun()
}

run(function () { console.log('Executando...')})

// uma função pode retornar/conter uma função
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

// como o resultado da função soma é uma função (a+b), eu posso logo em seguida
// passar o valor solcitado pela outra função(c)
soma(2, 3)(4)

// ou

// armazenar a primeira função em varável e depois usa a variável para 
// solicitar o outro valor
const cincoMais = soma(2, 3)
cincoMais(4)