//1.1 - Crie um sistema que peça para o seu usuário as seguintes informações: nome, idade, se possuí carta de motorista e se tem algum carro.
//1.2 - Se o usuário não for maior de idade ou não tiver carta exiba no console: "Giovanni, você não pode dirigir".
//1.3 - Se o usuário for maior de idade, tiver carta mas não tiver carro exiba no console: "Giovanni, você pode dirigir mas não tem um carro".
//1.4 - Se o usuário for maior de idade, tiver carta e carro exiba no console: "Giovanni, você será o motorista!"

let nome = prompt('Digite seu nome:');
let idade = Number(prompt('Digite sua idade:'));
let carta = prompt('Você possui carta de motorista? (sim ou não)');
let carro = prompt('Você possui carro? (sim ou não)');

if (idade < 18 || carta === 'não') {
    console.log(`${nome}, você não pode dirigir`);
}else if (idade >=18 && carta === 'sim' && carro === 'não') {
    console.log(`${nome}, você pode dirigir mas não tem um carro`);
} else if (idade >= 18 && carta === 'sim' && carro === 'sim') {
    console.log(`${nome}, você será o motorista!`);
} else {
    alert('Você inseriu um valor inválido');
}