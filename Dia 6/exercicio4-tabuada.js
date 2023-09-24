let tabuada = parseInt(prompt('Você deseja saber a tabela de qual número?'))

for(let proximasTabuadas = tabuada; proximasTabuadas <= tabuada + 2; proximasTabuadas++){
    console.log('tabuada do numero: ' + proximasTabuadas)

    for(let numero = 1; numero <= 10; numero ++){
        console.log(proximasTabuadas + ' * ' + numero + ' = ' + (proximasTabuadas * numero))
    }
    }



