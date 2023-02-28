const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "11223566",
    email: "andre@gmail.com"
};

//acessando com ponto
console.log(`O nome do cliente é ${cliente.nome} e tem ${cliente.idade} anos.`);
console.log(`Os 3 primeiros dígitos do CPF são: ${cliente.cpf.substring(0, 3)}`);

//acessando com colchetes
console.log(`\nO nome do cliente é ${cliente["nome"]} e tem ${cliente["idade"]} anos.`);


//forEach
const chaves = ["nome", "idade", "cpf", "email", "altura"];

chaves.forEach( (chave) => {
    console.log(`\nA chave ${chave} tem valor ${cliente[chave]}`)
});