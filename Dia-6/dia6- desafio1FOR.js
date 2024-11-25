/*
1 - Faça um algoritmo que receba um valor, inteiro e positivo, e usando a estrutura FOR, mostre no console uma contagem de 0 até o número recebido.
2 - Desenvolva um algoritmo que usando a estrutura FOR mostre no console uma contagem de 0 a 50, porém, essa contagem tem que ser feita de 5 em 5.
   Ex.: 0 5 10 15 20 25 … 45 50 Fim!
3 - Agora faça com que o algoritmo do exercício anterior exiba a mesma contagem mas na ordem inversa.
   Ex.: 50 45 40 35 30 25 … 5 0 Fim! 
4 - Faça um algoritmo utilizando a estrutura de repetição FOR que receba 1 número e exiba na tela qual o resultado da sua tabuada e dos próximos 2 números
   Ex: Números de entrada:3
Saída:
Número 3:      Número 4:    Número 5:       
3 x 1 = 3     4 x 1 = 4     5 x 1 = 
3 x 2 = 6     4 x 2 = 8     5 x 2 = 1
3 x 3 = 9     4 x 3 = 12    5 x 3 = 15         
3 x 4 = 12    4 x 4 = 16    5 x 4 = 20 */


// Resolução do exercício 1

let numero = Number(prompt('Digite um número inteiro e positivo: '))

for (let i = 0; i <= numero; i++) { // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    console.log(i)
}

// Resolução do exercício 2

for (let i = 0; i <= 50; i += 5) { // 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50
    console.log(i)
}

// Resolução do exercício 3

for (let i = 50; i >= 0; i -= 5) { // 50, 45, 40, 35, 30, 25, 20, 15, 10, 5, 0
    console.log(i) 
}

// Resolução do exercício 4

let num = Number(prompt('Digite um número para ver a tabuada: '))

for (let i = num; i <= num + 2; i++) { // explicação da linha : 3, 4, 5 
    console.log(`Tabuada do número: ${i}`) 
    for (let j = 0; j <= 10; j++) { // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
        console.log(`${i} x ${j} = ${i * j}`) // 1, 2, 3, 4, 5
    }
}


