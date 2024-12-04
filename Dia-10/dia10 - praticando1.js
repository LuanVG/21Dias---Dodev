/*1 - Crie um algoritmo que receba um número inteiro positivo e um array. 
Popule o array e no final exiba os índices em que número inserido aparece nesse array. 
Para testes do exercício use até 10 elementos no array*/

const array = [] // Array vazio
const indices = [] // Array vazio
let contadorIndice = 0 // Variável para controlar a posição do array de índices

const numeroProcurado = parseInt(prompt('Digite um número a ser procurado: ')) // Pede um número ao usuário e armazena na variável numeroProcurado
 
for (let i =0; i < 10; i++) { // Loop para inserir 10 elementos no array 
  const elemento = parseInt(prompt(`Digite o elemento ${i+1}: `)) // Pede um elemento ao usuário e armazena na variável elemento 
  array[i] = elemento; // Insere o elemento no array na posição i
}

for (let i = 0; i < 10; i++) { // Loop para percorrer o array 
    if (array[i] === numeroProcurado) { // Se o elemento na posição i for igual ao número procurado
        indices[contadorIndice] = i // Insere a posição i no array de índices
        contadorIndice++ // Incrementa o contador de índices
    }
}

console.log(`O número ${numeroProcurado} foi encontrado nas posições: ${indices}`) // Imprime as posições do número procurado no array