//propriedade que guarda uma função

const cliente = {

    nome: "João",
    idade: 24,
    email: "joaofirma@gmail.com",
    telefone: ["11 5555688566", "11 55589988347"],
    saldo: 200,
    efetuaPagamento: function(valor){
        if(valor > this.saldo){
            console.log(`Erro, saldo insuficicente.`);
        }else{
            this.saldo -= valor;
            console.log(`Pagamento realizado! Novo saldo: ${this.saldo}`);
        }
    },

};

cliente.efetuaPagamento(25);