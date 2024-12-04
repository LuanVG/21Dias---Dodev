let nomes = []; // Array vazio
let continuar = true // Variável para controlar o loop
let posicaoDoArray = 0 // Variável para controlar a posição do array

while (continuar) { // Enquanto continuar for verdadeiro (true)
  let nomeInserido = prompt('Insira um nome :') // Pede um nome ao usuário e armazena na variável nomeInserido
  nomes[posicaoDoArray] = nomeInserido // Insere o nome no array na posição posicaoDoArray 

  let continuarInserindo = prompt('Deseja inserir outro nome? (s/n)') // Pergunta se deseja inserir outro nome
    if (continuarInserindo === 'n') { // Se a resposta for 'n' (não) 
        continuar = false // continuar recebe false e o loop é interrompido 
    }
    posicaoDoArray++ // Incrementa a posição do array para inserir o próximo nome na próxima posição
}