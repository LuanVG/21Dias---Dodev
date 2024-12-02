/*
Calcule o IMC do seu usuário e informe a faixa dele.
*O IMC é a relação entre peso e altura e o cálculo é feito de acordo com a fórmula: IMC = peso / (altura x altura)
O peso deve estar em kg e a altura em metros, e o resultado é dado em kg/m2. Depois de obter o resultado, é possível verificar em que faixa o IMC se encontra, podendo indicar:
 - Magreza, quando o resultado é menor que 18,5 kg/m2;
 - Normal, quando o resultado está entre 18,5 e 24,9 kg/m2;   
 - Sobrepeso, quando o resultado está entre 24,9 e 30 kg/m2;
 - Obesidade, quando o resultado é maior que 30 kg/m2.
A partir da idade informada descubra o ano que o seu usuário nasceu(Considere o ano atual como 2023, faça essa conta usando apenas o ano).*/


function desafioIMC() {
    let continuar = true;
  
    while (continuar) {
      // Entrada de dados
      const nome = prompt("Digite seu nome:");
      const idade = parseInt(prompt("Digite sua idade (em anos):"));
      const peso = parseFloat(prompt("Digite seu peso (em kg):"));
      const altura = parseFloat(prompt("Digite sua altura (em metros):"));
  
      if (isNaN(idade) || isNaN(peso) || isNaN(altura)) {
        console.log("Por favor, insira valores válidos.");
        continue;
      }
  
      // Cálculo do IMC
      const imc = peso / (altura * altura);
      let faixa;
  
      // Determinar faixa do IMC com if/else
      if (imc < 18.5) {
        faixa = "Magreza";
      } else if (imc >= 18.5 && imc <= 24.9) {
        faixa = "Normal";
      } else if (imc > 24.9 && imc <= 30) {
        faixa = "Sobrepeso";
      } else {
        faixa = "Obesidade";
      }
  
      // Calcular ano de nascimento
      const anoAtual = 2023;
      const anoNascimento = anoAtual - idade;
  
      // Exibição dos resultados com switch
      switch (faixa) {
        case "Magreza":
          console.log(`Olá ${nome}, seu IMC é ${imc.toFixed(2)} kg/m², e você está na faixa de Magreza.`);
          break;
        case "Normal":
          console.log(`Olá ${nome}, seu IMC é ${imc.toFixed(2)} kg/m², e você está na faixa Normal.`);
          break;
        case "Sobrepeso":
          console.log(`Olá ${nome}, seu IMC é ${imc.toFixed(2)} kg/m², e você está na faixa de Sobrepeso.`);
          break;
        case "Obesidade":
          console.log(`Olá ${nome}, seu IMC é ${imc.toFixed(2)} kg/m², e você está na faixa de Obesidade.`);
          break;
        default:
          console.log("Não foi possível calcular sua faixa de IMC.");
      }
  
      console.log(`Você nasceu no ano de ${anoNascimento}.`);
  
      // Perguntar ao usuário se deseja continuar
      let escolha;
      do {
        escolha = prompt("Deseja calcular novamente? \nDigite: \n1 para Sim \n2 para Não");
        switch (escolha) {
          case "1":
            continuar = true;
            break;
          case "2":
            continuar = false;
            alert("Obrigado por usar o programa!");
            break;
          default:
            alert("Opção inválida. Tente novamente.");
        }
      } while (escolha !== "1" && escolha !== "2");
    }
  }
  
  // Chamar a função
  desafioIMC();