/* Criando uma função para gerar números randomicos,
 * utilizando o destructuring, pegando o elemento min e max
 * de um objeto. 
 * Setamos como padrão os valores min = 0 e max = 1000
 * E usamos o o floor para arredondar para baixo
 */

 // Pego elemento min e max do objeto
 function rand ({min = 0, max = 1000}) {
     const valor = Math.random() * (max - min) + min
     return Math.floor(valor)
 }

 // Crio um objeto min e maximo com valores
 const obj = {min: 40, max: 50 }

 // Imprimo a função passando o obj acima
 console.log(rand(obj))

 // Posso criar o objeto direto no console.log
 // E se passar apenas um valor, ele assume o valor padrão que foi definido
 console.log(rand({min: 995}))