const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaJuntas = [alunos, medias];

//mostrar da Juliana como exemplo
console.log(
`A aluna da posição 1 da lista de alunos é: ${listaJuntas[0][1]}.
A nota é ${listaJuntas[1][1]}`
);


//exemplo
const nomes = ["Ana", "Juliana", "Leonardo"];
const idades = [30, 35, 28];
const faculdade = [false, true, true];

const funcionarios = [nomes, idades, faculdade];

console.log(
    `A pessoa ${funcionarios[0][0]} tem idade de ${funcionarios[1][0]} anos e ${funcionarios[2][0]} faz faculdade.`
);