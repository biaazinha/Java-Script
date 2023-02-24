const numeros = [100, 200, 300, 400, 500, 600];

// i = 0 -> executada uma vez apenas
// i < 6 -> condição de execução
// i++   -> executada sempre ao final do bloco

for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
}