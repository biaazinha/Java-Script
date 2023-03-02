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

const chavesDoObjeto = Object.keys(cliente);   //aray mostrando os elementos do objeto

console.log(chavesDoObjeto)

if(!chavesDoObjeto.includes(`enderecos`)){
    console.error(`Erro, é necessário ter um endereço cadastrado`)
}