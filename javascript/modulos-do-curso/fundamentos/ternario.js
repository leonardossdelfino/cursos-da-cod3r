// Crio uma constante resultado
// Com a função arrow passo o parametro que sera passado, a noto
// Uso o operador ternário para para verificar o resultado

// Primeiro vem a operação lógica nota >= 7
// Depois o ternário, ? "Aprovado" : "Reprovado"

// Pode ser feito assim
//const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

//console.log(resultado(7.1))
//console.log(resultado(6.7))


// Ou assim
const resultado = nota => {
    return nota >= 7 ? "Aprovado" : "Reprovado"
}

console.log(resultado(7.1))
console.log(resultado(6.8))