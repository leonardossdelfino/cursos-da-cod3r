const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // retorna as chaves
console.log(Object.values(pessoa))  // retorna os valores
console.log(Object.entries(pessoa)) // retorma arrays com chave e valor

// retorno o array de pessoa, e percorro ele com o for each
// e percorrendo com o foreach, uso o destructuring para destruturar o array, e montar do jeito que eu quero, no caso como sei que é chave valor, escrevo dessa forma no console log
Object.entries(pessoa).forEach(([chave, valor]) => {
   console.log(`${chave}: ${valor}`) 
});

// Cria um objeto, e podemos definir alguma propriedades de uma chave por exemplo
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // é listado  ou não no array
    writable: false, // pode ser modificado ou não
    value: '01/01/2019' // valor
})

pessoa.dataNascimento = '01/01/17' // não funciona por não pode
console.log(Object.keys(pessoa))
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const destino = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
// var destino recebe os valor da sequênica o1 e o2, e os último valores são sobreescritos
const obj = Object.assign(destino, o1, o2)

Object.freeze(obj)
obj.c = 1234 // como usei o freeze, ele não vai mudar o obj.c
console.log(obj)