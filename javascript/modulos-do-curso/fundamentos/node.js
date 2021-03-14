let =1 

globalThis.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// criando uma variavel mauluca: sem var e let!
abc = 3 // NAO FAÇA ISSO!!
console.log(global.abc)

// geralmente fazem dessa forma
// module.exports = {e: 456, f: false, g: 'teste'}