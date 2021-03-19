const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// sem callback
let notasBaixas = [] // cria array em branco
for (let i in notas) { // percorre o array
    if (notas[i] < 7) // se menor que 7
        notasBaixas.push(notas[i]) // adiciona no notasBaixas
}

console.log(notasBaixas)

// com callback
// recebe nota do array "automático"
// o filter basicamente filtra os resultados com base no critério
// passado dentro do ( ) do filter
const notasBaixas2 = notas.filter(function (nota) { 
    return nota < 7
})

console.log(notasBaixas2)

// callback filter com arrow

// armazeno o teste em arrow dentro de uma variável
const notasMenorQue7 = nota => nota < 7 
// passo o notasMenorQue7 como parametro para filter
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3)

// fica muito melhor