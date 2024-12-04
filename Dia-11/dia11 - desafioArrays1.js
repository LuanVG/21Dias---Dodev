/* 1 - Avaliação da turma.

1 - Crie um array para receber os nomes dos alunos e outro para receber as notas;
2 - Para cada aluno inserido pergunte o nome e a nota da prova;
3 - Seu usuário deve ter a opção de parar de inserir informações quando desejar;
4 - No final exiba a nota de cada aluno, a soma das notas e a média geral da turma. Para calcular a média deve dividir a soma das notas pelo total de alunos.*/

let alunos = [];
let notas = [];
let continuar = true;
let contador = 0;

while (continuar) {
    let nome = prompt('Digite o nome do aluno:');
    let nota = Number(prompt('Digite a nota do aluno:'));
    alunos[contador] = nome;
    notas[contador] = nota;
    contador++;

    if (prompt('Deseja continuar? (s/n)') === 'n') {
        continuar = false;
    }
}

let soma = 0;

for (let i = 0; i < alunos.length; i++) {
    console.log(`O aluno ${alunos[i]} obteve a nota ${notas[i]}`);
    soma += notas[i];
}

let media = soma / alunos.length;

console.log(`A soma das notas é ${soma}`);
console.log(`A média da turma é ${media}`);