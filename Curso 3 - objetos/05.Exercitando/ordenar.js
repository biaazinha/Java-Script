const clientes = require("./clientes.json");

//ordenei em ordem alfabética

function ordenar(lista, propriedade){
    const resultado = lista.sort((a, b) => {
        if(a[propriedade] < b[propriedade]){
            return -1;
        }
        if(a[propriedade] > b[propriedade] ){
            return 1;
        }
        return 0;
    });

    return resultado
}

const ordenadoNome = ordenar(clientes, "nome");
const ordenadoInverso = ordenadoNome.reverse();

console.log(ordenadoNome);      //a até z
console.log(ordenadoInverso);   //z até a