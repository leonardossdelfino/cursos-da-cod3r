const divisao = function(dividendo, divisor) {

    let resultado = Math.floor(dividendo / divisor)
    let resto = dividendo % divisor

    console.log(`${dividendo} / ${divisor}, o resultado é ${resultado}, e o resto é ${resto}`)
}

divisao(10, 2)