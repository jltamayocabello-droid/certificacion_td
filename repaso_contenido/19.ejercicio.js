// Sistema de Disponibilidad

function verificarDisponibilidad(estado) {
    // Switch evaluará el valor de la variable estado
    switch (estado) {
        case "estacionado_adelante":
        case "estacionado_atras":
        return true;

        case "alquilado":
        case "en_taller":
            return false;

        default:
            console.warn("Estado de vehiculo no reconocido");
            return false;

    }
}

console.log(verificarDisponibilidad("estacionado_adelante")); // true
console.log(verificarDisponibilidad("en_taller"));           // false
console.log(verificarDisponibilidad("limpiando"));