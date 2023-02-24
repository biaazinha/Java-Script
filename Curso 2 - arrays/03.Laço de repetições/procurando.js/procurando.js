const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];
const listaJuntas = [alunos, medias];

function exibeNomeNota(alunos){
    if(listaJuntas(0).includes(alunos)){       // .includes = procurar como parametro alunos
        //const alunos = listaJuntas[0];
        //const medias = listaJuntas[1];

        const [alunos, medias] = listaJuntas;    //mesma coisa que as duas linhas comentadas acima

        const indice = alunos.indexOf(alunos);     // .indexOf = achar pelo índice

        const mediaAluno = medias[indice];
        console.log(`Aluno ${alunos} tem média de ${mediaAluno}`)

    }else{
        console.log("Aluno não encontrado");
    }
}

exibeNomeNota("João");  //colocat aqui como parametro quem eu quero saber