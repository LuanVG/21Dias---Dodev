/*Desafio - pratique usando Arrays, Loops e Switch Case.
1- Crie 2 arrays: um para nomes e um para senhas.
2- Solicite ao seu usuário o que ele deseja fazer: cadastrar, fazer login, excluir um cadastro ou encerrar o programa.
3- Faça o fluxo de funcionamento do código, considere que o usuário pode escolher quando encerrar o programa conforme as opções.
4- Se a opção escolhida for cadastro, solicite dois valores ao usuário, um nome e uma senha e guarde cada um no seu respectivo array.
5- Se a opção escolhida for login solicite ao usuário um nome e uma senha, depois procure o nome recebido no array de nomes e em caso positivo compare a senha no array de senhas. Se as duas comparações forem válidas exiba uma mensagem de sucesso.
6- Se a opção escolhida for excluir um cadastro solicite um nome ao usuário, então procure pelo nome no array de nomes e exclua ele e a senha correspondente do outro array, por fim organize o array para eliminar os espaços vazios.*/

let nomes = []
let senhas = []
let contador = 0

let continuar = true

while (continuar) {
    let opcao = prompt("Digite a opção desejada:\n 1-Cadastrar\n 2-Fazer login\n 3-Excluir cadastro\n 4-Encerrar o programa")

    switch (opcao) {
        case "1":
            nomes[contador] = prompt("Digite o nome")
            senhas[contador] = prompt("Digite a senha")
            contador++
            break

        case "2":
            let nome = prompt("Digite o nome")
            let senha = prompt("Digite a senha")
            let loginValido = false // loginValido = false

            for (let i = 0; i < nomes.length; i++) { // percorre o array nomes 
                if (nomes == nomes[i] && senhas == senhas[i]) { // se o nome e a senha digitados forem iguais ao nome e senha na posição i do array nomes e senhas 
                loginValido = true // loginValido = true
                }
            }
        
            if (loginValido) { // se loginValido for true
                alert("Login efetuado com sucesso")
            }   else {
                alert("Nome ou senha inválidos")
            }
                break;

        case "3":
            let nomeExcluir = prompt("Digite o nome que deseja excluir")
            let nomesAux = [] 
            let senhasAux = [] // senhasAux = []
            let contadorAux = 0 // contadorAux = nomesAux.length

            for (let i = 0; i < contador; i++) { // percorre o array nomes
                if (nomeExcluir == nomes[i]) { // se o nome a ser excluído for igual ao nome na posição i do array nomes 
                    alert("Cadastro excluído com sucesso") 
                }   else {
                    nomesAux[contadorAux] = nomes[i] // nomesAux.push(nomes[i])
                    senhasAux[contadorAux] = senhas[i] // senhasAux.push(senhas[i])
                    contadorAux++
                }
            }

            nomes = nomesAux // nomes = nomesAux
            senhas = senhasAux // senhas = senhasAux
            contador--
            break;

        case "4":
            continuar = false
            break;

        default:
            console.log("Opção inválida")
            break
        }
        
    }

    console.log(nomes)
