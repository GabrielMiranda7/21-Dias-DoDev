let usuario = parseInt(prompt('Voce deseja:' + '\n1 = abastecer com gasolina; \n2 = alcool; \n3 = calibrar os pneus'))

const valorGasolina = parseInt(5)

const valorAlcool = parseInt(3)

switch (usuario){
    case 1:
        let abastecimentoGasolina = parseFloat(prompt('Quantos reais de gasolina você quer abastecer?'))
        console.log( 'foram abastecidos ' + (abastecimentoGasolina / valorGasolina) + ' litros com os seus R$ ' + abastecimentoGasolina)
        break;

    case 2:
        let abastecimentoAlcool = parseFloat(prompt('Quantos reais de álcool você quer abastecer?'))
        console.log( 'foram abastecidos ' + (abastecimentoAlcool / valorAlcool) + ' litros com os seus R$ ' + abastecimentoAlcool)
        break;
    
    case 3:
        console.log('pneus calibrados com sucesso')
        break;

    default:
        console.log('Opção Inválida')    
}   
