const cliente = {
    nome: "João",
    idade: 24,
    email: "joaofirma@gmail.com",
    telefone: ["11 5555688566", "11 55589988347"],
};

cliente.enderecos = [
    {
      rua: "Rua José sarney",
      numero: 1269,
      apartamento: true,
      complemento: "ap 93",
    },
];


for (let chave in cliente) {

    let tipo = typeof cliente[chave];

    if(tipo != `object` && tipo != `function`){
        console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
    }
}