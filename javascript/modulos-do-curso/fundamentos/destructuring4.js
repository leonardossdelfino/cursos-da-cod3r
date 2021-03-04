// Crio a função onde recebo min e max, e 0 e 1000 são valores padrões
// caso não seja passado nenhum valor.
function rand ([min = 0, max = 1000]) {
    // se min maior que max, inverte min com max e max com min
    // depois dos (if) vem o destructuring e depois do = um array
    if (min > max) {
        [min, max] = [max, min] 
    }
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// como é um array, passo para a função somente o valor, diferente do obj
console.log(rand([50, 40]))
// posso passar somente um valor, o outro valor sera o padrão
console.log(rand([992]))
console.log(rand([, 10]))
// se não passar nada ele assume os dois valores padrões
console.log(rand([]))