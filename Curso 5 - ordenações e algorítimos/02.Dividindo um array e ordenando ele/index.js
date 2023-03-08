const listaLivros = require('./array.js');

function mergeSort(array){
    if(array.length > 1){
        const meio = Math.floor(array.length / 2);         //pega o valor da metade do array
        const parte1 = mergeSort(array.slice(0, meio));             //fatia em 1 -> guardou na parte 1
        const parte2 = mergeSort(array.slice(meio, array.length));  //fatia em 2 -> guardou na parte 2
        array = ordena(parte1, parte2);     //função ordena com os parametros das duas partes
    }
    return array;
}

function ordena(parte1, parte2){
    let posiAtual1 = 0;
    let posiAtual2 = 0;
    const resultado = [];

    while(posiAtual1 < parte1.length && posiAtual2 < parte2.length){
        let produtoAtual1 = parte1[posiAtual1];
        let produtoAtual2 = parte2[posiAtual2];
        if(produtoAtual1.preco < produtoAtual2.preco){
            resultado.push(produtoAtual1)
            posiAtual1++
        }else{
            resultado.push(produtoAtual2)
            posiAtual2++
        }
    }
    return resultado.concat(posiAtual1 < parte1.length
       ? parte1.slice(posiAtual1)
       : parte2.slice(posiAtual2))
}

console.log(mergeSort(listaLivros))