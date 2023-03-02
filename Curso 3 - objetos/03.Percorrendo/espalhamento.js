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

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`liganddo para ${telefoneComercial}`);
    console.log(`ligando para ${telefoneResidencial}`);
}

ligaParaCliente(...cliente.telefone);   //espalhou o array com 2 parametros passados

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0]
}

console.log(encomenda)