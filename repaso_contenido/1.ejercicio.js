let datos = [2, 5, 3, 6, 8, 6];

//ORDENAR DE MAYOR A MENOR

function compareNumbers(a, b) {
    return a - b;
}

datos.sort(compareNumbers);

console.log(datos);