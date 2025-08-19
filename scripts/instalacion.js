let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    // Previene que el navegador muestre el prompt automáticamente
    e.preventDefault();
    deferredPrompt = e;

    // Muestra el botón de instalación
    const installBtn = document.getElementById('installBtn');
    installBtn.style.display = 'inline-block';

    installBtn.addEventListener('click', () => {
        // Mostrar el prompt de instalación
        deferredPrompt.prompt();

        // Esperar la elección del usuario
        deferredPrompt.userChoice.then(choiceResult => {
            if (choiceResult.outcome === 'accepted') {
                mostrarNotificacion('✅ App instalada correctamente', 'success');
                console.log('👍 Usuario aceptó la instalación');
                installBtn.style.display = 'none'; // Ocultar el botón después
            } else {
                mostrarNotificacion('❌ Instalación cancelada', 'error');
                console.log('👎 Usuario canceló la instalación');
            }
            deferredPrompt = null;
        });
    });
});

// Evita mostrar el botón si ya está instalada
window.addEventListener('appinstalled', () => {
    console.log('✅ App instalada');
    document.getElementById('installBtn').style.display = 'none';
});