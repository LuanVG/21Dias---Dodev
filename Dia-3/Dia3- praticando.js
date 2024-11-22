let nome = prompt()
console.log(nome)

let idade = parseInt(prompt())
console.log(idade)

let altura = Number(prompt())
console.log(altura)

let peso = Number(prompt())
console.log(peso)


let anoDeNascimento = parseInt(prompt())
console.log(2024 - anoDeNascimento)

let imcDoUsuario = peso / (altura * altura)
console.log(imcDoUsuario)

let mensagem = `Olá ${nome}, você tem ${idade} anos, nasceu em ${anoDeNascimento}, tem ${altura} de altura, pesa ${peso}kg e seu IMC é de ${imcDoUsuario} Kg/m2`
console.log(mensagem)