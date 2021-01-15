const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo:'V40',
    velMax: 200
}

console.log(ferrari.__proto__) // forma de acessar o "Pai", e esse __proto__ é do Object em JavaScript, reservado

console.log(ferrari.__prot__ === Object.prototype) // true
console.log(volvo.__prot__ === Object.prototype) // true
console.log(Object.prototype.__prot__ === null) // true, pois o prototype aponta para null no final pois é a cadeira mais alta em JS

function MeuObjeto() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)

/*
    Herança é quando usamos um atributo ou funcionalidade não existente dentro da função atual por exemplo, onde ele vai subindo a cadeia até encotrar.
    Função -> pai -> avô ...
    Dessa forma conseguimos reutilizar atributos ou funcionalidades de outros "objetos e funções"
*/