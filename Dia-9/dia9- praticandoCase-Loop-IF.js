/* 
1 - Conhecendo seu usuário:
Escreva um algoritmo onde seu usuário deve informar nome, idade, peso, altura e profissão, a partir disso você deve exibir um texto com todas essas informações. Ex: Usuário inseriu nome: Giovanni, idade: 21, peso: 74kg, profissão: Programador, altura: 1.83, Você exibe: Olá Giovanni, você tem 21 anos, é programador, tem 1.83M de altura e pesa 74kg.
Verifique se o usuário é maior ou menor de idade, se ele for maior exiba na tela “Está liberado para tomar umas geladas”, se ele for menor exiba “Sem gelada para você”.
Utilize a idade informada pelo usuário, e mostre sua idade em meses, semanas e dias. Considere ano com 365 dias, mês com 30 dias e semana com 7 dias. */

/*const nome = prompt('Digite seu nome: ');
const idade = parseInt(prompt('Digite sua idade: '));
const peso = parseInt(prompt('Digite seu peso: '));
const altura = parseFloat(prompt('Digite sua altura: '));
const profissao = prompt('Digite sua profissão: ');

const meses = idade * 12;
const semanas = idade * 52;
const dias = idade * 365;

let mensagem = `Olá ${nome}, você tem ${idade} anos, é ${profissao}, tem ${altura}M de altura e pesa ${peso}kg. \n`;
console.log(mensagem);

if (idade >= 18) {
    console.log('Está liberado para tomar umas geladas');
} else {
    console.log('Sem gelada para você');
}

console.log(`Você tem ${meses} meses, ${semanas} semanas e ${dias} dias de vida.`);*/

function conhecerUsuario () {
    const nome = prompt('Digite seu nome: ');
    const idade = parseInt(prompt('Digite sua idade: '));
    const peso = parseInt(prompt('Digite seu peso: '));
    const altura = parseFloat(prompt('Digite sua altura: '));
    const profissao = prompt('Digite sua profissão: ');

    console.log(`Olá ${nome}, você tem ${idade} anos, é ${profissao}, tem ${altura}M de altura e pesa ${peso}kg.`);

    if(idade >= 18) {
        console.log('Está liberado para tomar umas geladas');
    } else {
        console.log('Sem gelada para você');
    }

    let escolha;
    do {
        escolha = parseInt(prompt('Escolha uma opção: \n1 - Calcular idade em meses,\n2 - semanas, \n3 - dias \n4 - Sair'))

        switch (escolha) {
            case 1: // idade em meses
            console.log(`Você tem aproximadamente ${idade * 12} meses de vida.`);
            break;

            case 2: // idade em semanas
            console.log(`Você tem aproximadamente ${idade * 52} semanas de vida.`);
            break;

            case 3: // idade em dias
            console.log(`Você tem aproximadamente ${idade * 365} dias de vida.`);
            break;

            case 4: // sair
            console.log('Até mais!');
            break;

            default:
            console.log('Opção inválida');
            break;
        }

    } while (escolha !== 4);
}

conhecerUsuario();