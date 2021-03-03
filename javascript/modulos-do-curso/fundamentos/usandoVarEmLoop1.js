// 1 - Declaração de variável
// 2 - Condição
// 3 - Incremento
for (var i = 0; i < 10; i++) {
    console.log(i)
}

// Ele irá imprimir o valor de i, que resultou em falso no FOR, que 
// no caso foi o número 10. E ele imprime porque var não tem escopo
// de blocos {}.
console.log('i = ', i)