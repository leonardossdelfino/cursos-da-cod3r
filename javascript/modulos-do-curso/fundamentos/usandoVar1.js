{
    {
        {
            {
                /*
                 * São variáveis globais quando declaradas fora de um 
                 * escopo, o fora de uma function.
                 * Dessa forma o var pode ser acessada de qualquer parte
                 * do programa. *Evitar*
                */
                var sera = 'Sera??'
            }
        }
    }
}

console.log(sera)

/* Quando a variável é declada dentro de um escopo, ela só podera ser 
 * ser acessada dentro destes mesmo escopo
*/
function teste() {
    var local = 123
    console.log(local)
}

teste()

/* Aqui apresenta erro, pois estou tentando imprimi uma várial 
 * que não é global, pois ela está dentro da function
*/
console.log(local)