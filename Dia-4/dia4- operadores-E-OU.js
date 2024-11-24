// Trabalhando com operadores E e OU : && e ||

// Operador E (&&) - Todas as condições precisam ser verdadeiras para que o bloco de código seja executado.
// Operador OU (||) - Apenas uma condição precisa ser verdadeira para que o bloco de código seja executado.

let usandoE = 2 === 3 && 4 === 4; // false
console.log(usandoE);
usandoE = 2 === 2 && 4 === 4; // true
console.log(usandoE);

let usandoOU = 2 === 3 || 4 === 4; // true
console.log(usandoOU);
usandoOU = 2 === 2 || 4 === 4; // true
console.log(usandoOU);
usandoOU = 2 === 3 || 4 === 5; // false
console.log(usandoOU);

let nome = prompt('Digite seu nome:')
let idade = Number(prompt('Digite sua idade: '));

if (nome === 'Luan Victor' && idade === 24) {
    console.log('Seu nome é Luan Victor e você tem 24 anos');
}else if (nome === 'Luan Victor' || idade === 24) {
    console.log('Seu nome é Luan Victor ou você tem 24 anos');
} else {
    console.log('Seu nome não é Luan Victor e você não tem 24 anos');
}
