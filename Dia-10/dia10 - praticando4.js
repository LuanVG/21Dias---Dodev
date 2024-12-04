/*Crie um algoritmo que peça um número inteiro positivo para o usuário. Em seguida, popule um array com os números de Fibonacci (o próximo número da sequência é a soma dos 2 números anteriores).
Na hora de somar com os termos anteriores, some com elementos anteriores do array. 
Faça com que o array tenha no máximo 10 elementos Para iniciar a sequência use o (número inserido - 1).
Ex.: inseriu o número 8, a sequência deve começar da seguinte maneira 7 8 15 23 ...*/

// Declaração de variáveis
let numero = parseInt(prompt('Digite um número inteiro positivo: ')) // Pede um número ao usuário e armazena na variável numero
let Fibonacci = [] // Array vazio
Fibonacci[0] = numero - 1 // Insere o número - 1 na primeira posição do array
Fibonacci[1] = numero // Insere o número na segunda posição do array

//criando loop
for (let i = 2; i < 10; i++) { // Loop para inserir 10 elementos no array 
    Fibonacci[i] = Fibonacci[i - 1] + Fibonacci[i - 2] // Insere a soma dos dois elementos anteriores na posição i
}

console.log('Sequência de Fibonacci: ' + Fibonacci) // Imprime a sequência de Fibonacci