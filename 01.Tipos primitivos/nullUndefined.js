//null - ausência de valor atribuído como valor de uma variável ESPERADA
let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}


//undefined - valor de uma variável que não foi inicializada INESPERADA
let input1 = null;
let input2;

console.log(input1); // null
console.log(input2); // undefined


//operadores de comparação do JavaScript podem ou não diferenciá-los
console.log(null == undefined); // true
console.log(null === undefined); // false