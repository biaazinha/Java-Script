const notas = [10, 9.5, 8, 7, 6];

const novasNotas = notas.map((nota) => {
    // if           se for? isso não?: continua
    return nota + 1 >= 10 ? 10 : nota + 1;
});

console.log(novasNotas);