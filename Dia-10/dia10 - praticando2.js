/*2 - Crie um algoritmo que peça 5 números ao usuário, coloque eles em um array, depois exiba esse array. 
Modifique os elementos do array de modo que a sequência de números fique ao contrário.
 Ex.: entrada: 1, 2, 3, 4, 5 -> saída: 5, 4, 3, 2 , 1*/

const array = [] // Array vazio
const arrayInvertido = [] // Array vazio

// populando o array

for (let i = 0; i < 5; i++) { // Loop para inserir 5 elementos no array 
    let numero = parseInt(prompt('Digite o ' + (i + 1) + 'º número: ')) // Pede um número ao usuário e armazena na variável numero
    array[i] = numero; // Insere o número no array na posição i
}

console.log('Array original: ' + array) // Imprime o array original

// invertendo o array

let contador = 4 // Variável para controlar a posição do array original
for (let i = 0; i < 5; i++) { // Loop para percorrer o array 
    arrayInvertido[i] = array[contador] // Insere o elemento na posição contador no array invertido na posição i
    contador-- // Decrementa o contador
}

console.log('Array invertido: ' + arrayInvertido) // Imprime o array invertido