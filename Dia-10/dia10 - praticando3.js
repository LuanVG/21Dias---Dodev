/*3 - Refaça o script anterior, mas agora pergunte ao usuário quantos números ele deseja inserir no array.
Depois, o usuário vai preenchendo elemento por elemento do vetor, ao final, exiba o array e o array ao contrário*/

// Declaração de variáveis
let array = [] // Array vazio
let arrayInvertido = [] // Array vazio
let quantidade = parseInt(prompt('Quantos números deseja inserir no array? ')) // Pede a quantidade de números ao usuário e armazena na variável quantidade

// Populando o array
for (let i = 0; i < quantidade; i++) { // Loop para inserir a quantidade de elementos no array 
    let numero = parseInt(prompt('Digite o ' + (i + 1) + 'º número: ')) // Pede um número ao usuário e armazena na variável numero
    array[i] = numero; // Insere o número no array na posição i
}

console.log('Array original: ' + array) // Imprime o array original

// Invertendo o array
let contador = quantidade - 1 // Variável para controlar a posição do array original
for (let i = 0; i < quantidade; i++) { // Loop para percorrer o array 
    arrayInvertido[i] = array[contador] // Insere o elemento na posição contador no array invertido na posição i
    contador-- // Decrementa o contador
}

console.log('Array invertido: ' + arrayInvertido) // Imprime o array invertido