let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) // true pois estamos no contexto NODE
                        // no browser é Window

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // false pois o bind aponta para obj
comparaComThis(obj) // true, pois o bind aponta para obj

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj) // false, o bind não funciona na arrow function
comparaComThisArrow(obj)
comparaComThisArrow(module.exports) 
