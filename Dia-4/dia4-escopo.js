// Trabalhando com escopo

let idade = Number(prompt('Digite sua idade: '));

if (idade >= 18) {
    console.log(idade) 
    let dentroEscopo = 'Dentro do escopo'; // Variável dentro do escopo
    console.log(dentroEscopo); // Dentro do escopo
    console.log('Maior de idade');
} else {
    console.log('Menor de idade'); 
}
console.log('Saiu do escopo'); 
console.log(dentroEscopo); // ReferenceError: dentroEscopo is not defined
