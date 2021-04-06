function calculadora(num1, operador, num2) {
    switch(operador) {
        case "+":
            return num1 + num2
        case "-":
            return num1 - num2
        case "*":
            return num1 * num2
        case "/":
            return num1 / num2
        default:
            return "Operador inválido!"
    }
}

console.log(calculadora(2, "+", 5))
console.log(calculadora(2, "-", 5))
console.log(calculadora(2, "*", 5))
console.log(calculadora(4, "/", 2))
console.log(calculadora(2, "%", 5))
