// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = '0' // Object aponta para prototype
const avo = { attr1: 'A' }

// Para informar a herança preciso informar  "__proto__: avo", pois ele sabe que se tiver a propriedade que estou procurando no objeto atual ele vai procurar no obj avo
const pai = { __proto__: avo, attr2: 'B', attr3: '3' }

// O mesmo acontece pra o __proto__: pai
const filho = { __proto__: pai, attr3: 'C' }

// No caso ele já encontrou no obj filho o attr3, então ele não vai procurar nos prototypes acima, ele ignora(sombreamento)
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)