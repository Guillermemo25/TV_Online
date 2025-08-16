// ✅ Inicializar EmailJS
(function () {
    emailjs.init("w9H4VThWMbzUFi-iJ"); // ⚠️ Reemplaza con tu ID de usuario
})();

// ✅ Enviar correo de sesión duplicada
function enviarCorreoSesionDuplicada(usuario) {
    emailjs.send("service_0uo6jxi", "template_fw2ans4", {
        usuario: usuario,
        timestamp: new Date().toLocaleString()
    })
        .then(function (response) {
            console.log("Correo enviado:", response.status);
        }, function (error) {
            console.error("Error al enviar correo:", error);
        });
}

// ✅ Enviar correo de cuenta no autorizada
function enviarCorreoCuentaNoAutorizada(usuario) {
    emailjs.send("service_0uo6jxi", "template_2e7xc2n", {
        usuario: usuario,
        timestamp: new Date().toLocaleString()
    })
        .then(function (response) {
            console.log("Correo enviado:", response.status);
        }, function (error) {
            console.error("Error al enviar correo:", error);
        });
}