const nomes = ["Evaldo", "Mari", "Bia"];

nomes.forEach(function(nome){
    console.log(nome);
});


//uma forma:
nomes.forEach((nome) => {
    console.log(nome);
});


//outra forma:
function imprimeNome(nome){
    console.log(nome);
}
nomes.forEach(imprimeNome);