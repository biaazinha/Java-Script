//conversão implícita
const numero = 456;
const numeroString = "456";
                              
console.log(numero == numeroString) // == converte(true)   === compara(false)
        
console.log(numero + numeroString)  //456456


//conversão explícita
//Number()
//String()
console.log(numero + Number(numeroString))


//exemplo de erro de NaN:

const n = 456;
const nString = Number("456");

console.log(n + nString)       //vai dar NaN 
