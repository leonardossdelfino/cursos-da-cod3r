function soma() {
    let soma = 0
    // arguments é um array presente dentro de todas as funções
    // se não é passado nenhum parametro o arguments está vazio
    for (i in arguments) {
        // soma = soma + arguments[i]
        // arguments[i] é o índce do array da função
        // e enquanto houver valores ele vai somando na variável soma
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))

console.log(soma(1.1, 2.2, "Teste"))
console.log(soma('a', 'b', 'c'))
