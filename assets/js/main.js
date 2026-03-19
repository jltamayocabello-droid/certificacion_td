// 1. Selección de elementos del DOM (Estándar ES6)
const cardName = document.querySelector('.profile-card__name');
const btnContact = document.querySelector('.profile-card__button--primary');

// 2. Escuchador de eventos
btnContact.addEventListener('click', () => {
    // 3. Captura de datos
    const newName = prompt("Escribe el nuevo nombre para la tarjeta:");

    // 4. Validación básica (Buena práctica TD)
    if (newName && newName.trim() !== "") {
        // 5. Manipulación del DOM
        cardName.textContent = newName;
        alert(`¡Nombre actualizado a: ${newName}!`);
    } else {
        alert("No ingresaste un nombre válido.");
    }
});