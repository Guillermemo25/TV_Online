
window.addEventListener('DOMContentLoaded', () => {
    const modalElement = document.getElementById('accessModal');
    const modal = new bootstrap.Modal(modalElement);
    const input = document.getElementById('userInput');
    const errorMsg = document.getElementById('errorMsg');
    const userInfo = document.getElementById('user-info');
    const nombreUsuarioSpan = document.getElementById('nombre-usuario');
    const hoy = new Date().toISOString().split("T")[0];

    // ✅ Función para mostrar el usuario identificado
    const mostrarUsuario = (nombre) => {
        nombreUsuarioSpan.textContent = `👤 ${nombre}`;
        userInfo.style.display = "flex";
    };

    // ✅ Verificar sesión local
    const sesionGuardada = JSON.parse(localStorage.getItem("usuarioPermitido"));
    if (sesionGuardada) {
        const userObj = usuariosPermitidos.find(u => u.nombre.toUpperCase() === sesionGuardada.nombre.toUpperCase());
        if (userObj && hoy <= userObj.expira) {
            mostrarUsuario(userObj.nombre);
            return;
        } else {
            localStorage.removeItem("usuarioPermitido");
        }
    }

    // ✅ Mostrar modal si no tiene sesión
    modal.show();

    const validar = () => {
        const valor = input.value.trim();
        if (!valor) {
            errorMsg.textContent = "⚠️ Por favor, ingresa un nombre de usuario.";
            errorMsg.style.display = 'block';
            return;
        }
        else {
            errorMsg.textContent = "";
            errorMsg.style.display = 'none';
        }
        const userObj = usuariosPermitidos.find(u => u.nombre === valor);

        if (userObj && hoy <= userObj.expira) {
            const ref = firebase.database().ref("usuarios/" + userObj.nombre.toLowerCase());

            // ✅ Verifica si ya hay una sesión activa en Firebase
            ref.once("value").then(snapshot => {
                if (snapshot.exists() && userObj.nombre.toLowerCase() !== "guillermocahuich") {
                    errorMsg.textContent = "⚠️ Este usuario ya inició sesión en otro dispositivo.";
                    errorMsg.style.display = 'block';
                    // ✅ Enviar correo de sesión duplicada mediante EmailJS
                    enviarCorreoSesionDuplicada(userObj.nombre);
                } else {
                    // ✅ Registrar sesión en Firebase (aunque ya exista, sobreescribimos si es GuillermoCahuich)
                    ref.set({
                        activo: true,
                        timestamp: new Date().toLocaleString()
                    });

                    // ✅ Guardar sesión local
                    localStorage.setItem("usuarioPermitido", JSON.stringify({ nombre: userObj.nombre }));
                    mostrarUsuario(userObj.nombre);
                    modal.hide();
                }
            }).catch(error => {
                console.error("Error Firebase:", error);
                errorMsg.textContent = "❌ Error al conectar con el servidor.";
                errorMsg.style.display = 'block';
            });

        } else {
            errorMsg.textContent = "❌ Usuario no autorizado o acceso expirado";
            errorMsg.style.display = 'block';
            enviarCorreoCuentaNoAutorizada(valor);
        }
    };

    // ✅ Eventos para botón e input
    document.getElementById('btnValidar').addEventListener('click', validar);
    input.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') validar();
    });
});

// ✅ Cierre de sesión local y Firebase
function cerrarSesion() {
    const sesion = JSON.parse(localStorage.getItem("usuarioPermitido"));
    if (sesion) {
        const nombre = sesion.nombre.toLowerCase();
        firebase.database().ref("usuarios/" + nombre).remove(); // elimina la sesión en Firebase
    }

    localStorage.removeItem("usuarioPermitido");
    location.reload(); // refresca para volver al modal
}