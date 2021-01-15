 const soma = function (x, y) {
     return x + y
 }

 const imprimirResultado = function (a, b, operacao = soma) {
     console.log(operacao(a, b))  // passo a operação que fará o cálculo de a e b
                                // se não passar assume function soma
 }

 imprimirResultado(3, 4)
 imprimirResultado(3, 4, soma)
 imprimirResultado(3, 4, function (x, y) {
     return x - y
 })

 imprimirResultado(3, 4, (x, y) => x * y)

 const pessoa = { // posso usar uma function dentro de obj
     falar() {
         console.log('Opa!')
     }
 }

 pessoa.falar()