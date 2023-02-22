const alunos = [
    'João', 
    'Juliana', 
    'Ana', 
    'Caio',
    'Lara',
    'Marjorie',
    'Guilherme',
    'Aline',
    'Fabiana',
    'Andre',
    'Carlos',
    'Paulo', 
    'Bia', 
    'Vivian', 
    'Isabela', 
    'Vinícius', 
    'Renan', 
    'Renata', 
    'Daisy', 
    'Camilo'
];

//o segundo parametro do índice não é incluido
//tem que ter o const com uma atribuição para o slice dar certo
const sala1 = alunos.slice(0, alunos.length / 2);
const sala2 = alunos.slice(alunos.length / 2);  //não coloca o segundo índice para ir até o final

console.log(sala1);
console.log(sala2);