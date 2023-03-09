function ganhoPorHora(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes); 
  
    //return salarioHora;   //normal

    return Math.round(salarioHora);  //Math.round

}

//ganhoPorHora(3000,176); 