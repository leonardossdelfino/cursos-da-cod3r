const escola = "Cod3r"

// Retorna qual letra está na posição 4 da palavra
console.log(escola.charAt(4))
// Se não tiver nada na posição 5 ele retorna em branco
console.log(escola.charAt(5))
// Retorna em ASCII o valor da posição 3 da palavra
console.log(escola.charCodeAt(3))
// Retorna o número do Index relacionado a letra (3), na palavra
console.log(escola.indexOf('3'))

// Imprime a frase apartir do índice 1
console.log(escola.substring(1))
// Imprime a frase do índice 0 até o índice 3, mas não imprime o ídice 3
console.log(escola.substring(0, 3))

// Concatena as palavras
console.log('Escola '.concat(escola).concat('!'))
console.log('Escola ' + escola + '!')

// Troca as letras dentro de uma palavra
console.log(escola.replace(3, 'e'))
console.log(escola.replace('r', 'R'))

// Usando o split, transformo em um array, essa sequência de nomes
console.log('Ana,Maria,Pedro'.split(','))
