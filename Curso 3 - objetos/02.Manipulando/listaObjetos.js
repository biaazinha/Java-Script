const cliente = {
    nome: "João",
    idade: 24,
    email: "joaofirma@gmail.com",
    telefone: ["11 5555688566", "11 55589988347"],
};


//adicionando endereços no objeto
cliente.enderecos = [
    {
      rua: "Rua José sarney",
      numero: 1269,
      apartamento: true,
      complemento: "ap 93",
    },
];


//push para adicionar outro array dentro de endereço
cliente.enderecos.push({
    rua: "Rua José Maury",
    numero: 1789,
    apartamento: false,
});


//filter para retornar uma lista especifica
const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
)

console.log(listaApenasApartamentos);
console.log(cliente);
console.log(cliente.enderecos);