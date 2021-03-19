const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

// forEach é uma função dentro do array, que sempre que houver
// um novo elemento dentro do array, ele vai disparar a 
// função que passamos, neste caso a "imprimir"

// ele sempre retorna primeiro o nome, depois o índice
// então tanto "faz" o nome do parâmetros passados
fabricantes.forEach(imprimir)
fabricantes.forEach(function(fabricante) {
    console.log(fabricante)
})

// ou arrow function

fabricantes.forEach(fabricante => console.log(fabricante))