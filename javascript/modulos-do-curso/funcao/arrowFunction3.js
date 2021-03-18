let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) // true pois estamos no contexto NODE
                        // no browser é Window

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // false pois o bind aponta para obj
comparaComThis(obj) // true, pois o bind aponta para obj

// na arrow function o This aponta para um módulo do Node
// diferente da função convencional
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

// false, o bind não funciona na arrow function
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports) 
