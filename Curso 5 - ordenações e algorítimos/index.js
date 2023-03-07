const { edGalho, edFolha } = require('./arrays');

function juntaListas(lista1, lista2){
    let listaFinal = [];
    let atual = 0;          //posição da lista final

    let posiAtual1 = 0;     //posição da lista 1
    let posiAtual2 = 0;     //posição da lista 2     

    //enquanto a posição for menor que o tamanho da lista(percorrendo a lista até o final)
    while (posiAtual1 < lista1.length && posiAtual2 < lista2.length){ 
        let produtoAtual1 = lista1[posiAtual1]
        let produtoAtual2 = lista2[posiAtual2]

        if(produtoAtual1.preco < produtoAtual2.preco){   //se o produto do 1 for mais barato que o do 2
            listaFinal[atual] = produtoAtual1            //lista final na posição atual vai ser o produto do 1
            posiAtual1++                                 //pula uma posição dessa lista porque deu certo
        }else{                                           //se o do 2 for menor que o do 1
            listaFinal[atual] = produtoAtual2            //então vai ser o produto do 2 que fica na posição da lista final
            posiAtual2++                                 //pula uma posição dessa lista porque deu certo
        }
        atual++                                          //pula uma posição da lista final a cada vez que ocupar um lugar nela
    }

    //enquanto ainda tiver elementos na lista 1 mesmo que a 2 tenha acabado
    while (posiAtual1 < lista1.length) {            
        listaFinal[atual] = lista1[posiAtual1];    //colocar esse elemento dentro da lista final na posição atual dela
        posiAtual1++;                              //aumentar a posição da lista 1 caso tenha mais posições nela
        atual++;                                   //aumentar a posição pois foi ocupada
    }

    //enquanto ainda tiver elementos na lista 2 mesmo que a 1 tenha acabado
    while (posiAtual2 < lista2.length) {            
        listaFinal[atual] = lista2[posiAtual2];    //colocar esse elemento dentro da lista final na posição atual dela
        posiAtual2++;                              //aumentar a posição da lista 2 caso tenha mais posições nela
        atual++;                                   //aumentar a posição pois foi ocupada
    }

    return listaFinal;
}

console.log(juntaListas(edGalho, edFolha))