const funcs =[]

/* Ele incrementa os valores de (i), porém Pelo fato de var 
 * não ter escopo de blocos, na hora de imprimir o var, ele 
 * vai imprimir o var já incrementado durante os 10 loops
 * no caso funcs[2] e funcs[8] vão ambas imprimir 10
*/
for (let i = 0; i < 10; i ++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()