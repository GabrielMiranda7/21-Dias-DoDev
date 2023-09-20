let nome = prompt('digite o seu nome: ')

let idade =  prompt('digite a sua idade: ')

let anoDeNascimento = 2023 - idade

let altura = parseFloat(prompt('digite a sua altura:'))

let peso = parseInt(prompt("digite o seu peso: "))

let imc = peso/(altura * altura)

console.log("Olá " + nome + ", você tem " + idade + " anos, nasceu em " + anoDeNascimento + ", tem " + altura + " de altura, pesa " + peso + "kg, seu IMC é " + imc + " Kg/m2")
