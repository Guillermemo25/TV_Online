/**
 * @file scripts/emailJS.js
 * @description Define las variables de configuración para EmailJS
 */
let IdUsuario_EmailJS = "w9H4VThWMbzUFi-iJ";
let IdServicio_EmailJS = "service_0uo6jxi";
let template_SesionDuplicada = "template_fw2ans4";
let template_SesionNoAutorizada = "template_2e7xc2n";


/**
 * Inicializa el servicio EmailJS con el ID de usuario proporcionado.
 * Este bloque se ejecuta automáticamente al cargar el script.
 */
(function () {
    emailjs.init(IdUsuario_EmailJS); // ⚠️ Reemplaza con tu ID de usuario
})();

/**
 * Envía un correo notificando una sesión duplicada para el usuario dado.
 * @param {string} usuario - Identificador del usuario con sesión duplicada.
 * @description Utiliza EmailJS para enviar la alerta al correo configurado.
 */
function enviarCorreoSesionDuplicada(usuario) {
    emailjs.send(IdServicio_EmailJS, template_SesionDuplicada, {
        usuario: usuario,
        timestamp: new Date().toLocaleString()
    })
        .then(function (response) {
            console.log("Correo enviado:", response.status);
        }, function (error) {
            console.error("Error al enviar correo:", error);
        });
}

/**
 * Envía un correo electrónico notificando un intento de acceso con una cuenta no autorizada.
 * @function
 * @param {string} usuario - Nombre o identificador del usuario no autorizado.
 * @description Utiliza EmailJS para enviar una alerta de cuenta no autorizada al correo configurado.
 */
function enviarCorreoCuentaNoAutorizada(usuario) {
    emailjs.send(IdServicio_EmailJS, template_SesionNoAutorizada, {
        usuario: usuario,
        timestamp: new Date().toLocaleString()
    })
        .then(function (response) {
            console.log("Correo enviado:", response.status);
        }, function (error) {
            console.error("Error al enviar correo:", error);
        });
}