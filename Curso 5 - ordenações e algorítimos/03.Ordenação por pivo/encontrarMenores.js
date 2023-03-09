const listaLivros = require('./array');

function encontraMenores(pivo, array){        //pivo é o objeto que quer como referencia para achar menores que ele

    let menores = 0;                          //armazenar os que são menores 

    for(let atual = 0; atual < array.length; atual++){    //percorrer o array inteiro
        let produtoAtual = array[atual];                  //produto na posição inicial 
        if(produtoAtual.preco < pivo.preco){              //comparar o atual com o pivo escolhido
            menores++          //aramzena aqui se tiver um objeto menor que o pivo
        }
    }
    //         array        de              para
    trocaLugar(array, array.indexOf(pivo), menores);
    return array
}

function trocaLugar(array, de, para){     //pegou o lugar onde o pivo estava e colocou no lugar "certo"
    const elem1 = array[de];
    const elem2 = array[para];

    array[para] = elem1;
    array[de] = elem2;
}

function divideNoPivo(array){       //função para colocar aleatoriamente os valores menores ANTES do pivo no array
    let pivo = array[Math.floor(array.length / 2)];     //pivo na posição do valor do array dividio por 2 e arredondado para baixo
    encontraMenores(pivo, array);
    let valoresMenores = 0;

    for(analisando = 0; analisando < array.length; analisando++){
        let atual = array[analisando];
        if(atual.preco <= pivo.preco && atual !== pivo){
            trocaLugar(array, analisando, valoresMenores);
            valoresMenores++;
        }
    }
    return array;
}

//                              pivo            array
//console.log(encontraMenores(listaLivros[2], listaLivros));

//console.log(divideNoPivo(listaLivros));

module.exports = trocaLugar;