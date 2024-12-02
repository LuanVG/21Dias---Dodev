function exibirAnosVividos(anoNascimento) {
    const anoAtual = 2024; // Substitua por um ano fixo ou pegue o valor de outra fonte
    
    for (let ano = anoNascimento; ano <= anoAtual; ano++) {
        console.log(`${ano} - ${ano - anoNascimento} anos de idade`);
    }
}

function main() {
    let continuar = true;

    while (continuar) {
        const anoNascimento = parseInt(prompt("Digite o ano de nascimento:"));
        
        if (isNaN(anoNascimento) || anoNascimento > 2024) { // Valida em relação ao ano fixo
            console.log("Ano inválido! Tente novamente.");
            continue;
        }

        exibirAnosVividos(anoNascimento);

        let resposta = prompt("Deseja inserir novos dados? (s/n)").toLowerCase();

        switch (resposta) {
            case "s":
                console.log("Ok, vamos continuar.");
                break;
            case "n":
                console.log("Programa finalizado.");
                continuar = false;
                break;
            default:
                console.log("Opção inválida. Considere isso como um 'não'.");
                continuar = false;
        }
    }
}

main();