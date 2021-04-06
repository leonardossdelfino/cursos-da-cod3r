function compraCarro(carro) {
    switch(carro) {
        case "Hatch":
            return "Compra efetuada com sucesso!"
        case "Sedan": case "Motocicleta": case "Caminhonete":
            return "Tem certeza que não prefere este modelo?"
        default:
            return "Não trabalhamos com este tipo de automóvel aqui!"
    }
}

console.log(compraCarro("Hatch"))
console.log(compraCarro("Motocicleta"))
console.log(compraCarro("Caminhonete"))
console.log(compraCarro("Avião"))