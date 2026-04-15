// Callback Hell

// Código síncronico
function paso1(Callback) {
    setTimeout(() => Callback('Paso 1 completado'), 1000);
}
function paso2(prev, Callback) {
    setTimeout(() => Callback(prev + '+ Paso 2'), 1000);
}
function paso3(prev, Callback) {
    setTimeout(() => Callback(prev + '+ Paso 3'), 1000);
}

// Código asincronico

paso1(res1 => paso2(res1, res2 => paso3(res2, res3 => console.log(res3))));