const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// break chama o For mais próximo
// percorro o array nums
// quando o indice x=5 e pula para fora do laço FOR
// break não tem influência sobre IF
for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

// no CONTINUE, ele não pula para fora do laço
// quando ele encontra oque foi relacionado ao If, ele ignora esse índice 
// e continua executando o laço, não mostrando apenas essa expressão
for (y in nums) {
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}

// NÃO USAR, SOMENTE PARA DIDÁTICA
// posso criar um rótulo para o for
externo:
for (a in nums) {
    for (b in nums ) {
        if (a == 2 && b == 3) {
            // consigo chamar o for rotulado, usando a palavra externo
            // se não ele chamaria o for do b
            break externo
        }
        console.log(`Par = ${a}, ${b}`)
    }
}