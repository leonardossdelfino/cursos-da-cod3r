const valores = [7.7, 8.9, 6.3, 9.2]

// mostra os valores dessas posições
console.log(valores[0], valores[3])
// Se tentar acessar uma posição que não existe ele retona valore indefinido
console.log(valores[4])

// Posso adicionar um valor diretamente na posição
valores[4] = 10
console.log(valores)
// Mostra o tamanho array
console.log(valores.length)

// Push adiciona valores também, e pode ser adicionado qualquer tipo
// Evite misturar tipos dentro do array
valores.push({id: 3}, false, null, 'texto')
console.log(valores)

// pop remove o último valor do array, e retorna ele mesmo
console.log(valores.pop())
// delete - Remove uma posição(atributo) do array
delete valores[0]
console.log(valores)

// array é um objeto
console.log(typeof valores)