// Crio uma constante resultado
// Com a função arrow passo o parametro que sera passado, a nato
// Uso o operador ternário para para verificar o resultado
// arrow é (nota =>)
// Operado ternário é (nota >= 7 ? 'true' : 'false')
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))