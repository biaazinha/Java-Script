function minhaFuncao(param){
    //bloco de código
}
minhaFuncao("param")


//expressão de função
const soma = function(num1, num2){
    return num1 + num2
}
console.log(soma(1, 1))


//diferença principal: HOISTING
console.log(apresentar())

function apresentar(){
    return "olá";
}


//exemplo erro
//funções e var são "listadas" no topo do arquivo
//ele não acha a soma antes pois está como const

//console.log(soma(1, 1))

//const soma = function(num1, num2){
//    return num1 + num2
//}