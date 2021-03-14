function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    // se forem diferentes trabalho1 de trabalho2, retorna true, OU exclusivo
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário
    
    // Cria o objeto com chava valor automático
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))