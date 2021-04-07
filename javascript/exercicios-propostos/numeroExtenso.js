function numPorExteso(num) {
    switch (num) {
        case 0:
            return "Zero"
        case 1:
            return "Um"
        case 2:
            return "Dois"
        case 3:
            return "Três"
        case 4:
            return "Quatro"
        case 5:
            return "Cinco"
        case 6:
            return "Seis"
        case 7:
            return "Sete"
        case 8:
            return "Oito"
        case 9:
            return "Nove"
        case 10:
            return "Dez"
        default:
            return "Numero fora do intervalo!"
    }
}

console.log(numPorExteso(0))
console.log(numPorExteso(1))
console.log(numPorExteso(2))
console.log(numPorExteso(3))
console.log(numPorExteso(4))
console.log(numPorExteso(5))
console.log(numPorExteso(6))
console.log(numPorExteso(7))
console.log(numPorExteso(8))
console.log(numPorExteso(9))
console.log(numPorExteso(10))
console.log(numPorExteso(11))