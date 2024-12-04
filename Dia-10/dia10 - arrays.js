// Declarando um array

let arrayDeNomes = ['João', 'Maria', 'José', 'Ana', 'Carlos']; // Array com 5 elementos
let outroArray = [] // Array vazio

let primeiroElemento = arrayDeNomes[0]; // Acessando o primeiro elemento do array
arrayDeNomes[0] = 'Pedro'; // Alterando o primeiro elemento do array
outroArray[0] = 'Pedro'; // Adicionando um elemento ao array vazio

console.log(arrayDeNomes); // ['Pedro', 'Maria', 'José', 'Ana', 'Carlos']
console.log(outroArray); // ['Pedro']

// Loop em arrays

for (let i = 0; i < arrayDeNomes.length; i++) { // Percorre o array de nomes de 0 até o tamanho do array - 1 
  console.log(arrayDeNomes[i]); // Imprime cada nome do array de nomes 
}

// Métodos de arrays

let numeros = [1, 2, 3, 4, 5];

numeros.push(6); // Adiciona um elemento ao final do array
console.log(numeros); // [1, 2, 3, 4, 5, 6]

let ultimoElemento = numeros.pop(); // Remove o último elemento do array e retorna o elemento removido
console.log(ultimoElemento); // 6

primeiroElemento = numeros.shift(); // Remove o primeiro elemento do array e retorna o elemento removido
console.log(primeiroElemento); // 1

numeros.unshift(0); // Adiciona um elemento ao início do array
console.log(numeros); // [0, 2, 3, 4, 5]

let subArray = numeros.slice(1, 3); // Retorna um subarray com os elementos de índice 1 até 3 (não incluído)
console.log(subArray); // [2, 3]

let indice = numeros.indexOf(4); // Retorna o índice do elemento 4 no array
console.log(indice); // 3

numeros.splice(1, 2); // Remove 2 elementos a partir do índice 1
console.log(numeros); // [0, 4, 5]

numeros.reverse(); // Inverte a ordem dos elementos do array
console.log(numeros); // [5, 4, 0]

numeros.sort(); // Ordena os elementos do array em ordem crescente
console.log(numeros); // [0, 4, 5]



