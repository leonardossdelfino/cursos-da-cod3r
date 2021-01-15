/* While é mais usado quando temos uma quantidade determinada
 * de valores a serem incrementados.
 */

let contador = 1 
// Enquanto contador menor ou igual 10, faça
while(contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}

for(let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
// Enquanto o i menor que o tamanho do array, icrementa e faz novamente
for(let i = 0; i < notas.length; i++) {
    console.log(`Nota = ${notas[i]}`)
}