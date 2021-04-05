// IIFE -> Immediately Invoked Function Expression
// Função que é invocada imediatamente após ser criada
// Auto invocada
// Foge do escopo Global, muito utilizado no browser, para não tocar o
// o windows por exemplo

(function() {
    console.log('Será executado na hora!!')
    console.log('Foge do escopo mais abrangente!')
})()

// Mesmo código porém toca o escopo global
    console.log('Será executado na hora!!')
    console.log('Foge do escopo mais abrangente!')