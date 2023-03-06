//Repetição de código quase sempre é sinal de que o trecho repetido poderia ser extraído para uma função, assim pode ser reaproveitado

function troca(lista, analise) {
    let itemAnalise = lista[analise];
    let itemAnterior = lista[analise - 1];
   
    lista[analise] = itemAnterior;
    lista[analise - 1] = itemAnalise;
}
   
module.exports = troca;