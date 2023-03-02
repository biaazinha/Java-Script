const clientes = require("./clientes.json");

//                 nome, elemento, quem
function encontrar(lista, chave, valor){
    return lista.find((item) => item[chave].includes(valor));
}

const encontrado = encontrar(clientes, "nome", "Kirby");            //Kirby
const encontrado2 = encontrar(clientes, "telefone", "1918820860");  //Amy

console.log(encontrado);
console.log(encontrado2);