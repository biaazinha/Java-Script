const notas = [7, 7, 8, 9];

const novasNotas = [...notas];  //copia o vetor

// o push altera o original
//novasNotas.push(10); 
//altera o novo também
//notas.push(5);

console.log(`As novas notas são: ${novasNotas}`);
console.log(`As notas originais são: ${notas}`);

