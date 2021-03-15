const imprimirResultado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)

// Cuidado, ele aceita!! Porém da false pois ele está comparando
// a String com o number
imprimirResultado('Epa!') 