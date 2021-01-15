var numero = 1

/* Um bloco de chaves não é escopo, um escopo pode ser uma função
 * ou fora de uma função (global)
 */
{
    var numero = 2
    console.log('Dentro = ', numero)
}
console.log('Fora = ', numero)

/*
 * Dessa forma a variável numero vai varler 2 e será impresso 2
 * duas vezes, pois o bloco é ignorado, por não valor como 
 * escopo.
*/