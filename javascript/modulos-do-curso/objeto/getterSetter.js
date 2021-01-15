const sequencia = {
    _valor: 1, /*  
                    Convensão, usar o underline antes do atributo estou dizendo que posso acessar apenas internamente esse atributo, se quiser acessar do exterior, preciso usar uma função
                */
    get valor() { return this._valor++ },
    set valor(valor) {
        if(valor > this._valor) { // se maior que _valor
            this._valor = valor // _valor recebe valor
        }
    }

}

console.log(sequencia.valor) // JavaScript já entende que é o get porque estou chamando o valor pela forma de escrever, diferente do exemplo abaixo

sequencia.valor = 1000 // estou atribuindo um valor, então ele sabe que é o set
console.log(sequencia.valor)