const dados = require("./cliente.json");
//require = função para puxar código/arquivo de outro lugar

console.log(dados);
console.log(typeof dados);    //object
//altera o arquivo do json e não precisa mudar nada aqui



//stringify = transformar em string -> não pode puxar dados específicos se não é mais objeto
const clienteString = JSON.stringify(dados);

console.log(clienteString);
console.log(typeof clienteString);    //string



const objetoCliente = JSON.parse(clienteString);    //retorna objeto
console.log(objetoCliente);