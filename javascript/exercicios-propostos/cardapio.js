const pedido = (cod, qtd) => {
    switch (cod) {
        case 100:
            console.log(`Você pediu ${qtd} Cachorro Quente, o valor a ser pago é R$ ${(qtd * 3.00).toFixed(2).replace(".", ",")}.`)
            break
        case 200:
            console.log(`Você pediu ${qtd} Hambúrger Simples, o valor a ser pago é R$ ${(qtd * 4.00).toFixed(2).replace(".", ",")}.`)
            break
        case 300:
            console.log(`Você pediu ${qtd} Cheeseburguer, o valor a ser pago é R$ ${(qtd * 5.50).toFixed(2).replace(".", ",")}.`)
            break
        case 400:
            console.log(`Você pediu ${qtd} Bauru, o valor a ser pago é R$ ${(qtd * 7.50).toFixed(2).replace(".", ",")}.`)
            break
        case 500:
            console.log(`Você pediu ${qtd} Refrigerante, o valor a ser pago é R$ ${(qtd * 3.50).toFixed(2).replace(".", ",")}.`)
            break
        case 600:
            console.log(`Você pediu ${qtd} Suco, o valor a ser pago é R$ ${(qtd * 3.80).toFixed(2).replace(".", ",")}.`)
            break
        default:
            console.log("Não temos este produto!")
            break
    }
}

pedido(100, 2)
pedido(200, 2)
pedido(300, 2)
pedido(400, 2)
pedido(500, 2)
pedido(600, 2)
pedido(700, 2)