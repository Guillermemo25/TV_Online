/**
 * Muestra una notificación durante 3 segundos con una animación de entrada y salida.
 * @param {string} mensaje - Texto a mostrar en la notificación.
 * @param {string} [tipo='info'] - Tipo de notificación: 'success', 'error', 'warning', 'info', 'default'.
 */
function mostrarNotificacion(mensaje, tipo = 'default') {
    const container = document.getElementById('toast-container');

    const toast = document.createElement('div');
    toast.className = `toast ${tipo}`;
    toast.textContent = mensaje;

    // Cierre manual al hacer clic
    toast.addEventListener('click', () => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    });

    container.appendChild(toast);

    // Mostrar animación
    setTimeout(() => toast.classList.add('show'), 10);

    // Ocultar y eliminar después de 3s
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
