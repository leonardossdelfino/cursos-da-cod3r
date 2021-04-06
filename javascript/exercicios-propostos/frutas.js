function vendaDeFrutas(fruta) {
    switch(fruta) {
        case "maça": 
            return "Não vendemos esta fruta aqui"
        case "kiwi":
            return "Estamos com escassez de kiwis"
        case "melancia":
            return "Aqui está, são 3 reais o quilo"
        default:
            return "Digite alguma fruta que vendemos!"
    }
}

console.log(vendaDeFrutas("kiwi"))
console.log(vendaDeFrutas("maça"))
console.log(vendaDeFrutas("melancia"))
console.log(vendaDeFrutas("abacate"))