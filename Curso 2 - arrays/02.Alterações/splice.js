const nomes = [
    "João", 
    "Ana", 
    "Caio", 
    "Lara", 
    "Marjorie", 
    "Leo"
];

//coloca o índice do que quer retirar e depois quantos a partir dele
//vai colocar o Rodrigo no lugar do índice indicado
nomes.splice(1, 2, "Rodrigo");

console.log(nomes);



//exemplo
animaisDoAquario = ['🐋', '🐙', '🐬', '🦈']

//como tem o 0 no segundo parametro então o polvo não sai do array
animaisDoAquario.splice(1,0,'🐠')
animaisDoAquario.splice(3,2,'🐟')

console.log(animaisDoAquario)