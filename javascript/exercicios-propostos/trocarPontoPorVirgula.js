const valorEmReal = function(valor) {
    let valorEmReais = `R$ ${valor.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

valorEmReal(0.1 + 0.2)