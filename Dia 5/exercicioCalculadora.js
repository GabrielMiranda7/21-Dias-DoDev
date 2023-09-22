let numero1 = parseFloat(prompt('Escolha um número'))

let numero2 = parseFloat(prompt('Escolha outro número'))

let operação = prompt('Escolha a operação')

switch (operação){
    case "+":
        console.log( 'a operação de adição foi realizada (' + numero1 + ' + ' + numero2 + ') e o resultado foi: ' + (numero1 + numero2))
        break;

    case '-':
        console.log( 'a operação de subtração foi realizada (' + numero1 + ' - ' + numero2 + ') e o resultado foi: ' + (numero1 - numero2))
        break;

    case '*':
        console.log('a operação de multiplicação foi realizada (' + numero1 + ' * ' + numero2 + ') e o resultado foi: ' + (numero1 * numero2))
        break;
        
    case '/':
        console.log('a operação de divisão foi realizada (' + numero1 + ' / ' + numero2 + ') e o resultado foi: ' + (numero1 / numero2))
        break;

}