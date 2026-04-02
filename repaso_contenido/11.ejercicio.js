let valores = [5, 6, 7, 6, 9];

// let total = 0;

// for (const valor of valores) {
//    total+= valor;
// }

// console.log(total);

total = valores.reduce((a, b) => a + b);

console.log(total);