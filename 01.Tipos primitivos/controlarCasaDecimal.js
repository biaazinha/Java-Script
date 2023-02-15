function ganhoPorHora(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes); 
  
    const total = salarioHora.toFixed(2);  // duas casas após a vírgula
  
    return total;
  
  }