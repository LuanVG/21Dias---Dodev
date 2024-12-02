/*
Imagine que você trabalha num banco e sua missão é fazer um algoritmo para prever o aumento de salário de seus clientes.

1 - Peça para seu cliente informar seu nome, idade e salário atual e exiba essas informações em tela.
2 - Peça para que seu cliente confirme as informações, se ele informar que digitou errado, peça para colocar TODAS as informações novamente, repita as perguntas até o usuário informar que digitou as informações corretamente.
3 - Faça a previsão do salário dele para os próximos 10 anos considerando que:

     - O cliente recebe anualmente aumento salarial. 
     - Sabe-se que: no primeiro ano, ele receberá um aumento de 1,5%, sobre o seu salário atual; A partir do segundo ano, os aumentos salariais sempre corresponderam ao dobro do percentual do ano anterior. Apresente todos os valores com o ano correspondente. Ex: 2024 - R$1600. */



function preverSalario() {
    let nome, idade, salario, confirmar;
    let continuar = true;

    while (continuar) {
        // Entrada de dados
        nome = prompt("Digite seu nome:");
        idade = parseInt(prompt("Digite sua idade:"));
        salario = parseFloat(prompt("Digite seu salário atual:"));

        // Exibição das informações
        console.log(`Nome: ${nome}\nIdade: ${idade}\nSalário: R$${salario.toFixed(2)}`);

        // Confirmação das informações
        confirmar = prompt("As informações estão corretas? (s/n)").toLowerCase();

        // Verificação da confirmação
        if (confirmar === "s") {
            continuar = false;
        } else {
            console.log("Digite as informações novamente.");
        }
    }

    // Previsão do salário para os próximos 10 anos
    const anoAtual = 2024;
    let aumentoPercentual = 1.5; // Primeiro aumento

    console.log(`Previsão de salário para os próximos 10 anos:`);

    for (let i = 0; i < 10; i++) {
        salario += salario * (aumentoPercentual / 100); // aplicar aumento
        console.log(`${anoAtual + i} - R$${salario.toFixed(2)}`); // exibir resultado
        aumentoPercentual *= 2; // dobrar o aumento
    }
}

preverSalario();