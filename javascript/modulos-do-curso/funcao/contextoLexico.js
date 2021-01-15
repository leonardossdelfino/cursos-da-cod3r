 const valor = 'Global'

 function minhaFuncao() {
     console.log(valor)
 }

 function exec() {
     const valor = 'Local' // vai buscar dentro do contexto onde foi declarado
     minhaFuncao()          // no caso o Global, acima
 }

 exec()