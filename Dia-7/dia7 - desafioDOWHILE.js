// Caixa eletrônico DoDev (DOWHILE)

/*Solicite o nome e o cpf do seu cliente.
-Pergunte um valor.
-Ofereça a opção de saque ou depósito.
-Caso a opção de saque seja a escolhida, remova o valor inserido do saldo total.
-Caso a opção de depósito seja escolhida, adicione o valor inserido do saldo total.
-Pergunte se o seu usuário deseja continuar. (Insira 1 para continuar e 2 para parar).
-Exiba o saldo total.
-Exiba o maior valor inserido(independente de ser depósito ou saque).
-Exiba a média dos valores inseridos(independente de ser depósito ou saque).

REGRAS: 
    1- Considere iniciar a variável saldo com algum valor
    1- Não deve ser permitido sacar um valor não disponível no saldo.
    2- Não deve ser permitido sacar nem depositar um valor negativo. */


// Criando Variáveis

let saldo = 1000;
let maiorValorInserido = 0;
let somaValoresInseridos = 0;
let totalTransacoes = 0;
let continuar = false

do {
    const nome = prompt('Digite o seu nome: ')
    const cpf = prompt('Digite o seu CPF: ')
    const valor = Number(prompt('Digite o valor da transação: '))
    const operacao = Number(prompt('Digite: \n 1 para saque \n 2 para depósito: '))

    if (valor < 0) {
        console.log('Valor inválido')
    } else if (operacao === 1 && valor > saldo) {
        console.log('Saldo insuficiente')
    } else if (operacao === 1) {
        console.log(`olá, ${nome}! ${cpf} seu saldo atual é de ${saldo}`)
        saldo -= valor;
        totalTransacoes++;
        somaValoresInseridos += valor;
        if (valor > maiorValorInserido) {
            maiorValorInserido = valor;
        }
        console.log(`Transação realizada com sucesso. Seu saldo atual é R$${saldo}`)
    } else {
        console.log(`olá, ${nome}! ${cpf} seu saldo atual é de ${saldo}`)
        saldo += valor;
        totalTransacoes++;
        somaValoresInseridos += valor;
        if (valor > maiorValorInserido) {
            maiorValorInserido = valor;
        }
        console.log(`Transação realizada com sucesso. Seu saldo atual é R$${saldo}`)
    }
    const opcao = prompt('Deseja continuar? (1 para sim e 2 para não)')
    if (opcao === '1') {
        continuar = true
    } else if (opcao === '2') {
        continuar = false
    } else {
        console.log('Opção inválida')
        continuar = false
    }
} while (continuar)

    console.log(`Saldo final: R$${saldo}`)
    console.log(`Maior valor inserido: R$${maiorValorInserido}`)
    console.log(`Média dos valores inseridos: R$${somaValoresInseridos / totalTransacoes}`)

