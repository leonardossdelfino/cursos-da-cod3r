var numero = 1

{
    // Let considera {} como escopo, então ele usa a várial de dentro
    // Se não houver variável dentro ele pega variável de fora
    // Mas resaltando var não tem escopo por {} e let sim.
    let numero = 2
    console.log('Dentro = ', numero)
}
console.log('Fora = ', numero)

// DEFINIÇÕES DE VAR E LET //
/* VAR - Tem escopo global e de função
 * LET - Tem escopo global, função e blocos{}
*/