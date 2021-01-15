// criado uma função que pega uma nota, arredonda para baixo(floor)
// e armazena na variável imprimirResultado
const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra!')
            break // Para sair do casa caso seja verdadeiro, sai do bloco switch
        case 8: case 7:
            console.log('Aprovado!')
            break
        case 6: case 5: case 4:
            console.log('Recuperação!')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado!')
            break
        default:
            console.log('Nota inválida!')
    }
}

imprimirResultado(10)