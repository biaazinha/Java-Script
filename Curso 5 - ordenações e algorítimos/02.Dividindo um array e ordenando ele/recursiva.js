function dorme(milissegundos){
    return new Promise(resolve => setTimeout(resolve, milissegundos));
}

async function incrementaNumero(numero){
    console.log(numero)
    await dorme(2000)
    return incrementaNumero(numero + 1)
}
  
incrementaNumero(1)

//função incrementa o número passado como parâmetro em uma unidade e, antes de sair, chama a si própria novamente.