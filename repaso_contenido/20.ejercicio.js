// Renta de auto

let tipoAuto = prompt("Ingrese el tipo de auto: econónmico, sedan o suv");
let días = parseInt(prompt("Ingrese la cantidad de dias"));

let precioPorDia;
let total;

switch (tipoAuto.toLowerCase()) {
    case "economico":
        precioPorDia = 30000;
        break;
    case "sedan":
        precioPorDia = 50000;
        break;
    case "suv":
        precioPorDia = 70000;
        break;
    default:
        alert("Tipo de auto no reconocido");
        precioPorDia = 0;
        break;
}

total = precioPorDia * dias;

if (precioPorDia > 0) {
    total = precioPorDia * dias;
    if (dias > 7) {
        total = total * 0.9;
    }
    
    alert("El total a pagar por la renta es: $" + total);

}