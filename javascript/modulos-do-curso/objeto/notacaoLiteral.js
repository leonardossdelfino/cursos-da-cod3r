 const a = 1
 const b = 2
 const c = 3

 const obj1 = { a: a, b: b, c: c }
 const obj2 = { a, b, c} // ele assume o nome da varável como valor
 console.log(obj1, obj2)

 const nomeAttr = 'nota' // nome do atributo
 const valorAttr = 7.87 // valor do atributo

 const obj3 = {}
 obj3[nomeAttr] = valorAttr
console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

const obj5 = {
    funcao1: function() {
        // ... normal, antigo
    },
    funcao2() {
        // ... mai novo, reduzido
    }
}

console.log(obj5)