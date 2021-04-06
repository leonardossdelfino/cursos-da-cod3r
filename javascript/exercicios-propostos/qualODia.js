function qualODia(dia) {
    switch(dia) {
       case 2: case 3: case 4: case 5: case 6:
           console.log("Dia útil!")
           break
        case 1: case 7:
            console.log("Fim de semana!")
            break
        default:
            console.log("dia inválido!") // Poderia ser com o return também!
            break
    }
}

qualODia(2)
qualODia(7)
qualODia(5)
qualODia(3)