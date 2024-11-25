/* Desenvolva um algoritmo que receba a nota e o sexo do aluno, usando a estrutura WHILE, e pergunte ao usuario se ele deseja cadastrar outra nota. No final, exiba no console:
 - A média geral dos alunos
 - Quantos homens enviaram as notas
 - Quantas mulheres tiveram nota acima de 7
 - Qual a maior nota entre os homens */

 // Criando Variáveis

let mediaGeral = 0
let contadorHomens = 0
let contadorMulheresAcimaDe7 = 0
let maiorNotaHomens = 0
let contador = 1

// Laço de repetição WHILE

while (contador <= 10) {
    nota = parseInt(prompt(`Digite a nota do ${contador} º aluno `))
    sexo = prompt('Digite o sexo do aluno: (m/f)')

    if (sexo === 'm') {
        if (nota > maiorNotaHomens) {
            maiorNotaHomens = nota // maiorNotaHomens recebe a nota
        }
        contadorHomens++
    }
    if (sexo === 'f' && nota > 7) { // && = E
        contadorMulheresAcimaDe7++
    }
    mediaGeral += nota // mediaGeral = mediaGeral + nota
    contador++ 
}

mediaGeral = mediaGeral / 10 

console.log(`A média geral dos alunos é ${mediaGeral}`)
console.log(`Quantidade de homens que enviaram as notas: ${contadorHomens}`)
console.log(`Quantidade de mulheres que tiveram nota acima de 7: ${contadorMulheresAcimaDe7}`)
console.log(`Maior nota entre os homens: ${maiorNotaHomens}`)

