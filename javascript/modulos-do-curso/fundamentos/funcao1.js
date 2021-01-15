// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

// Ele retorna o valor 5 no console, pois na própria função tem console.log
imprimirSoma(2, 3)
// Se passar um número ele funciona, mas soma com uma variavel undefined
// Retornando um NaN
imprimirSoma(2)
// Se passar mais de um valor, ele usa somente os dois primeiros
// Descarta o resto
imprimirSoma(2, 3, 4, 5, 6, 7, 8)
// Se não passar nada retorna NaN também
imprimirSoma()

// Função com retorno
// Defino que a variável b tem como padrão o valor 1, se nada for passado
function soma(a, b = 1) {
    return a + b
}

// Preciso usar o console.log, pois ele retorna o valor, não imprime
console.log(soma(2, 3))
// Se passar apenas um valor, ele usa o valor padrão definido na função
console.log(soma(2))