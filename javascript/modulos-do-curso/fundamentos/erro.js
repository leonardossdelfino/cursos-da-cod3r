 function tratarErroELancar(erro) {
     // throw new Erro('...')
     // throw 10
     // throw true
     // throw 'mensagem'
     throw {
         nome: erro.name,
         msg: erro.message,
         data: new Date
     }
 }

 function imprimirNomeGritado (obj) {
     // try tenta faze a operação se der erro o cath pega o erro
     // e armazena na variável passada (e)
     // e neste caso está mandando para a função tratarErroELancar
     try {
         console.log(obj.name.toUpperCase() + '!!!')
     } catch (e) {
         tratarErroELancar(e)
     // o finally sempre será executado, com erro ou não
     } finally {
         console.log('final')
     }
 }