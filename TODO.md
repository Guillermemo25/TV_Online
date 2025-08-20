# 📋 TODO / MEJORAS - PWA TV_ONlINE

Última revisión: 2025-08-15

---

## 🔧 FUNCIONALIDAD
- [x] ✅ Ingresar al servicio por Login (solo usuario sin contraseña)
- [ ] Conectarse a Firebase para validar usuario
- [ ] Crear catalogo de planes con cantidad de dispositivos y precios
- [ ] Permitir inicio de sesión desde múltiples dispositivos de acuerdo a plan
- [ ] Validar canales disponibles según el plan de usuario
- [x] ✅ Añadir buscador de canales
- [ ] Mostrar advertencia en Card de canal si este no se encuentra disponible o si fue reportado.
- [ ] Agregar autoplay y controles adicionales al modal del video.
- [ ] Mejorar la visibilidad del modal en pantallas pequeñas
- [ ] Usar LocalStorage o Firebase para guardar historial de canales vistos recientemente (Validar si es necesario)
- [x] ✅ Integrar notificaciones toast
- [ ] Integrar sistema de notificaciones push

---

## 📱 EXPERIENCIA DE USUARIO (UX/UI)

- [ ] Generar .ICO
- [ ] Mejorar iconos de la PWA (192 px y 512 px)
- [ ] Cambiar el mensaje de datos móviles por un banner menos intrusivo que no use `alert()`.
- [ ] Implementar configuración modo oscuro.
- [ ] Personalizar íconos y textos en el botón de instalación PWA según la plataforma.
- [ ] Añadir feedback visual (ej: loading spinners) cuando se valida el usuario.
- [ ] Mostrar mensaje si la app ya está instalada (más visible).
- [ ] Deshabilitar botón 'Reportar' si el canal ya se ha reportado
- [ ] Agregar advertencia de 'Canal no disponible' cuando un usuario reporta ese canal
- [ ] Mejorar diseño de modal en pantallas responsive pequeñas
- [ ] Mostrar mensaje si no hay conexión a internet

---

## 🌐 RENDIMIENTO Y OPTIMIZACIÓN

- [ ] Optimizar imágenes (usar `.webp` si es posible) para cargar más rápido.
- [x] ✅ Minificar y separar scripts en archivos independientes (`serviceWorker`, `firebase`, `emailJS`, etc.).
- [x] ✅ Separar estilos en archivos independientes
- [ ] Hacer `lazy load` de imágenes y/o canales según scroll (mejora en rendimiento).
- [ ] Cachear contenido estático como `manifest.json`, íconos, CSS y JS con Service Worker.
- [ ] Usar Firebase Hosting para mejorar el rendimiento global.

---

## 🔐 SEGURIDAD

- [ ] Implementar validaciones más robustas en la entrada de usuario.
- [ ] Proteger rutas de Firebase con reglas de seguridad (actualmente se asume confianza total).
- [ ] Añadir una política de `Content-Security-Policy (CSP)` en el `<head>` del HTML.
- [ ] Validar URLs de los iframes antes de cargarlos dinámicamente.
- [ ] Implementar expiración automática de la sesión con `setTimeout`.
- [ ] Añadir Content Security Policy (CSP) en `index.html`
- [ ] Revisar uso de HTTPS en todos los recursos
- [ ] Validar URLs externas antes de cargarlas

---

## 🧪 TESTING

- [ ] Probar en navegadores y dispositivos variados (Safari, Edge, Firefox, Android, iOS).
- [ ] Usar Lighthouse para revisar rendimiento, accesibilidad y PWA compliance.
- [ ] Simular condiciones de red lenta para probar comportamiento offline o en 3G.
- [ ] Pruebas de instalación como PWA en Android e iOS

---

## 💌 CORREOS Y SESIONES

- [ ] Mostrar un mensaje de confirmación cuando se envía un correo por sesión duplicada.
- [ ] Añadir dashboard para ver usuarios activos o registros de accesos desde Firebase.
- [ ] Considerar usar `firebase.auth()` si se requiere mayor seguridad y autenticación.

---

## 🧼 CÓDIGO Y MANTENIMIENTO

- [x] ✅ Separar lógica en archivos externos (`auth.js`, `firebase.js`, `videos.js`, etc.).
- [x] ✅ Documentar todas las funciones en comentarios JSDoc.
- [ ] Mover lista de videos a una base de datos en tiempo real (Firebase o JSON remoto).
- [x] ✅ Se activa aplicación de actualizaciones automática.

---

## 🆕 POSIBLES NUEVAS FUNCIONES

- [ ] Agregar favoritos o "Mi lista" de canales.
- [ ] Soporte para Chromecast o AirPlay.
- [ ] Reproducción en segundo plano (donde sea posible).
- [ ] Agregar calendario de programación o recordatorios.
- [ ] Modo de solo audio para canales de noticias o música.

---
