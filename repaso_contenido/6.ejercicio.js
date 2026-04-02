let total = 0;

let valores = [5, 6, 7, 6, 9];

for (let index = 0; index < valores.length; index++) {
    const valor = valores[index];

    if(valor >= 7){
        break;
    }

    total += valor;
}

console.log(total);