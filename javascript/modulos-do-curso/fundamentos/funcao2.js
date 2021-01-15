// Armazenando uma função em uma variável
// Muito pareciada com a função normal mas armazenando em uma var
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma função arrow em uma variável
// Arrow usa => para indicar que é uma função
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// Retorno implícito
// Função reduzida, para apenas uma linha
// Crio const, passo os parametros, e retorno => a operação, que retorna o valor
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))

// Se for apenas um parametro, reduzimos ainda mais
// Crio const, passo o parametro, e passo o retorno
const imprimir2 = a => console.log(a)
imprimir2('Legal!!')