// usando a notação literal
// formato mais padrão
const obj1 = {}
console.log(obj1)

// object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object // cria o obj2
console.log(obj2)

// funções construtoras
function Produto(nome, preco, desc) { // letra maiúscula
    this.nome = nome // this aqui diz que nome é público, acesso de qualquer lugar 
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc) // retorna para essa função pública
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// função factory
// são padrões de projetos, porém ainda são funções que "Criam"
function criarFuncionario(nome, salarioBase, faltas) {
    return { // retorna um objeto
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase /30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null) // criando objeto nulo
filha.nome = 'Ana'
console.log(filha)

// LEGAL //
// uma função famosa que retorna objeto recebido em JSON

/* 
    Recebe um JSON, no caso do exemplo foi uma const, e converste usando o parse(JSON.parce), passando entre parenteses, aspas simples e duplas e JSON(somente texto).
    
    Dessa forma ele converte o JSON(texto) em um objeto que consigo manipular(for exemplo como se fosse um formulário de cadastro)

    E para imprimir, como ele agora é um object, eu acesso o atributo "info" do objeto "fromJSON"
*/
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)