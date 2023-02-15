function ganhoPorHora(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes); 
  
    const formatado = salarioHora.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  
    return formatado;
  
}

//ganhoPorHora(3000,176); 
//'R$ 17,05'

//style : Que é o estilo do formato a ser utilizado, aqui é permitido usar: decimal, currency, percent. Currency: A moeda usada