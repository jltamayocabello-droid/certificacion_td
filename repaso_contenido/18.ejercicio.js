// Lógica de Productos en JavaScript

const productos = [
{nombre: "Teclado", ventas: 150},
{nombre: "Mouse", ventas: 100},
{nombre: "Monitor", ventas: 200},
{nombre: "Impresora", ventas: 50}
]

function obtenerProductoMasVendido(lista) {
    // Manejo de borde: si la lista esta vacia
    if (lista.length === 0) return null;
    // Inicialización primer elemento
    let masVendido = lista[0];
    // Iteración para comparar
    lista.foreach(producto => {
        if (producto.ventas > masVendido.ventas) {
            masVendido = producto;
        }
    });
    return masVendido;
}

const resultado = obtenerProductoMasVendido(productos);
console.log(`El producto estrella es: ${resultado.nombre} con ${resultado.ventas} ventas.`)