let fome = prompt('Você está com fome?')

let dinheiro = prompt('Você tem dinheiro hoje?')

if (fome === "Não" || dinheiro === "Não"){
    console.log('Hoje a janta será em casa!')

} else if(fome === 'Sim' && dinheiro === 'Sim'){
    let restaurante = prompt('o restaurante está aberto?')
    
    if (restaurante === 'Não'){
        console.log('Peça um delivery')

    } else if (restaurante === 'Não'){
    console.log('Hoje o jantar será no seu restaurante preferirdo!')
}

}