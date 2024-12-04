/*2 - Concessionária DoDev
1 - Crie três arrays, um para guardar  os modelos, um para guardar os anos e um para guardar os valores do carro
2 - Utilizando o WHILE, peça para o usuário cadastrar novos carros(modelo, ano e valor), popule os 3 arrays nas mesmas posições.
3 - Seu usuário deve definir quando parar de inserir informações.
4 - Exiba o nome, ano e valor dos carros inseridos.
       ex: Celta, 2020 Valor: 50.000
5 - Ordene seus vetores pelo preço dos carros. (Aqui você deve usar seu algoritmo de ordenação, não use os nativos do javascript, como o OrderBy
*/



let modelos = []; // Array para guardar os modelos
let anos = []; 
let valores = [];
let continuar = true; // Variável para controlar a continuação do cadastro
let contador = 0; // Variável para controlar a posição dos vetores

while (continuar) { // Enquanto continuar for verdadeiro
    let modelo = prompt('Digite o modelo do carro:'); // Pede o modelo do carro
    modelos[contador] = modelo; // Armazena o modelo no vetor
    let ano = Number(prompt('Digite o ano do carro:')); 
    anos[contador] = ano;
    let valor = Number(prompt('Digite o valor do carro:'));
    valores[contador] = valor; 
    contador++; // Incrementa o contador

    if (prompt('Deseja continuar? (s/n)') === 's') { // Pergunta se deseja continuar
        continuar = true; // Se a resposta for 'n', continuar recebe false
    } else if (prompt('Deseja continuar? (s/n)') === 'n') {
        continuar = false; // Se a resposta for 's', continuar recebe true
    } else { 
    console.log('Opção inválida!'); // Se a resposta for diferente de 's' ou 'n', exibe a mensagem
    }
}

console.log('Carros cadastrados:'); // Exibe a mensagem
for (let i = 0; i < modelos.length; i++) { // Percorre o vetor de modelos
    console.log(`Modelo:${modelos[i]}, Ano:${anos[i]}, Valor:${valores[i]}`); // Exibe o modelo e o ano
}

// Ordenação dos vetores

for (let i = 0; i < valores.length - 1; i++) { // Percorre o vetor de valores
    for (let j = 0; j < valores.length - i - 1; j++) { 
        if (valores[j] > valores[j + 1]) { // Se o valor na posição j for maior que o valor na posição j + 1 
            
            let modeloMaiorValor = modelos[j]; // Armazena o modelo na posição j em uma variável
            modelos[j] = modelos[j + 1]; // O modelo na posição j recebe o modelo na posição j + 1 
            modelos[j + 1] = modeloMaiorValor; // O modelo na posição j + 1 recebe o modelo armazenado na variável

            let anoMaiorValor = anos[j]; // Armazena o ano na posição j em uma variável
            anos[j] = anos[j + 1];  // O ano na posição j recebe o ano na posição j + 1
            anos[j + 1] = anoMaiorValor; // O ano na posição j + 1 recebe o ano armazenado na variável

            let valorMaior = valores[j]; // Armazena o valor na posição j em uma variável
            valores[j] = valores[j + 1]; // O valor na posição j recebe o valor na posição j + 1
            valores[j + 1] = valorMaior; // O valor na posição j + 1 recebe o valor armazenado na variável
        }
    }
}
console.log('---------------------------------');
console.log('Carros ordenados por valor:');
console.log('---------------------------------');
for (let i = 0; i < modelos.length; i++) {
    console.log(`Modelo:${modelos[i]}, Ano:${anos[i]}, Valor:${valores[i]}`);
}
