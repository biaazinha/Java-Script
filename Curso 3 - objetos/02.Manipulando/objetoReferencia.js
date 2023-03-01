const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
}
   
const objPersonagem2 = objPersonagem
objPersonagem2.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome) //Gandalf, o Cinzento
console.log(objPersonagem2.nome) //Gandalf, o Cinzento

/*
A variável objPersonagem2 não fez uma cópia do objeto original, apenas serviu como referência
para o objPersonagem. Assim, qualquer alteração em qualquer um dos objetos altera ambos.
*/
