let nome = prompt('Qual o seu nome?')

let idade = parseInt(prompt('Qual a sua idade?'))

let cartaDeMotorista = prompt('Possui carta de motorista?')

if (idade < 18 || cartaDeMotorista === 'Não'){
    console.log(nome + ', você não pode dirigir')
}

else if (idade >= 18 && cartaDeMotorista === 'Sim'){
    let carro = prompt('Possui algum carro?')

    if (carro === 'Não'){
        console.log(nome + ', você pode dirigir, mas não tem um carro')
    }

    else {
    console.log(nome + ', você será o motorista!')
}

}