let idade = Number(prompt("Digite sua idade: ")); // Number() para converter o valor em número

switch(idade){ // switch case é uma estrutura de controle que permite a seleção de um bloco de código a ser executado a partir de uma expressão
    case 10:
        console.log('Você tem 10 anos'); // se idade for 10, imprime a mensagem
        break; // break é usado para sair do bloco de código
    case 15:
        console.log('Você tem 15 anos'); // se idade for 15, imprime a mensagem
        break;
    default:
        console.log('Você tem outra idade'); // se idade não for 10 nem 15, imprime a mensagem
        break;
}
