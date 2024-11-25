//1.1 - Crie um algoritmo que peça 2 números ao usuário
//1.2 - Utilizando o switchCase dê a opção do usuário escolher qual operação matemática será realizada com esses números
//1.3 - Exiba no console a operação feita e o resultado da contalet num1 = Number(prompt("Digite o primeiro número: ")); 

let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));
let operacao = prompt("Digite a operação desejada: +, -, *, /");

switch(operacao){
    case '+':
        console.log(`A soma de ${num1} + ${num2} é ${num1 + num2}`);
        break;
    case '-':
        console.log(`A subtração de ${num1} - ${num2} é ${num1 - num2}`);
        break;
    case '*':
        console.log(`A multiplicação de ${num1} * ${num2} é ${num1 * num2}`);
        break;
    case '/':
        console.log(`A divisão de ${num1} / ${num2} é ${num1 / num2}`);
        break;
    default:
        console.log('Operação inválida');
        break;
}