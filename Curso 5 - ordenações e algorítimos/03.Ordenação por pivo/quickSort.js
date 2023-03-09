const listaLivros = require('./array');
const trocaLugar = require('./encontrarMenores');

function quickSort(array, esquerda, direita){

    if(array.length > 1){
        let indiceAtual = particiona(array, esquerda, direita);

        if(esquerda < indiceAtual - 1){
            quickSort(array, esquerda, indiceAtual - 1);
        }
        if(indiceAtual < direita){
            quickSort(array, indiceAtual, direita)
        }

    }
    return array;
}

function particiona(array, esquerda, direita){
    let pivo = array[Math.floor((esquerda + direita) / 2)];     //ter o valor do pivo
    let atualEsquerda = esquerda;   //0
    let atualDireita = direita;     //10

    while(atualEsquerda <= atualDireita){

        while(array[atualEsquerda].preco < pivo.preco){    //cuida da iteração da esquerda para direita
            atualEsquerda++
        }

        while(array[atualDireita].preco > pivo.preco){     //cuida da iteração da direita para esquerda
            atualDireita--
        }  

        if(atualEsquerda <= atualDireita){
            //         array       de           para
            trocaLugar(array, atualEsquerda, atualDireita);
            atualEsquerda++;
            atualDireita--;
        }
    }
    return atualEsquerda;   //indice que queremos usar para marcar a posição de onde começa e termina
}

//                      array   esquerda     direita 
console.log(quickSort(listaLivros, 0, listaLivros.length - 1));