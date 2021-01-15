// estratégia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))
// quando passado 0, ele entende como falso, então ele assume o valor padrão
// e retorna 3 ao invés de 0

// estratégia 2, 3 e 4 para gerar valor padrão
// usando o operador ternário
function soma2(a , b, c) {
    a = a !== undefined ? a : 1
    // se o índice 1 no arguments for válido 
    b = 1 in arguments ? b :1
    // se não for um número retorna o valor padrão
    c = isNaN(c) ? 1 : c
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// valor padrão do ES2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))