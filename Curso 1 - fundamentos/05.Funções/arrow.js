function apresentar(nome){
    return `Meu nome é ${nome}`;
}

//arrow function
//sempre com const e um nome
//reduz a linha de código de uma função

const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

//arrow function com +1 linha

const somaNumeroPequenos = (num1, num2) => {
    if (num1 > 10|| num2 >10){
        return "somente números de 1 a 9"
    }else{
        return num1 + num2;
    }
}