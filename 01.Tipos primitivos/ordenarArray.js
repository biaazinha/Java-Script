//errado
var lista = [10,1, 5, 9, 8, 12, 15];
lista.sort();    // [1, 10, 12, 15, 5, 8, 9]


//certo - comparar
function comparaNumeros(a,b) { if (a == b) return 0; if (a < b) return -1; if (a > b) return 1; }
lista.sort(comparaNumeros);     // [1, 5, 8, 9, 10, 12, 15]


//mais certo ainda
lista.sort((a, b) => a - b);     // [1, 5, 8, 9, 10, 12, 15]