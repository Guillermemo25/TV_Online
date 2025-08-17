const container = document.getElementById("card-container");
const videoFrame = document.getElementById("videoFrame");
const videoModal = new bootstrap.Modal(document.getElementById('videoModal'));

renderizarCanalesFiltrados("");

function renderizarCanalesFiltrados(nombreBusqueda) {
    // 1. Filtrar canales por nombre
    const canalesFiltrados = filtrarCanalesPorNombre(nombreBusqueda);

    // 2. Limpiar contenedor antes de renderizar
    container.innerHTML = "";

    // 3. Agrupar por clasificación
    const clasificaciones = {};

    canalesFiltrados.forEach(canal => {
        if (!clasificaciones[canal.clasificacion]) {
            clasificaciones[canal.clasificacion] = [];
        }
        clasificaciones[canal.clasificacion].push(canal);
    });

    // 4. Renderizar secciones agrupadas
    Object.keys(clasificaciones).sort().forEach(clasificacion => {
        // Crear título de la sección
        const sectionTitle = document.createElement("h3");
        sectionTitle.className = "mt-5 mb-3 text-secondary border-bottom pb-2";
        sectionTitle.textContent = `📂 ${clasificacion} (${clasificaciones[clasificacion].length} canales)`;
        container.appendChild(sectionTitle);

        // Crear fila de cards
        const row = document.createElement("div");
        row.className = "row";

        clasificaciones[clasificacion].forEach(video => {
            const col = document.createElement("div");
            col.className = "col-sm-6 col-md-4 col-lg-3 mb-4";

            col.innerHTML = `
                <div class="card card-custom h-100" onclick="abrirModal('${video.url}', '${video.titulo}')">
                    <img src="${video.img}" class="card-img-top" alt="${video.titulo}">
                    <div class="card-body">
                        <h5 class="card-title">${video.titulo}</h5>
                        <p class="card-text text-muted">${video.descripcion}</p>
                        <button class="btn btn-sm btn-danger mt-2" onclick="reportarCanal(event, '${video.titulo}')">Reportar</button>
                    </div>
                </div>
            `;

            row.appendChild(col);
        });

        container.appendChild(row);
    });
}

function filtrarCanalesPorNombre(nombreBusqueda) {
    // Si la cadena es vacía o solo espacios, devolver todos los canales
    if (!nombreBusqueda || nombreBusqueda.trim() === "") {
        return canales;
    }

    // Filtrar por coincidencias en el título (ignorando mayúsculas/minúsculas)
    const resultado = canales.filter(canal =>
        canal.titulo.toLowerCase().includes(nombreBusqueda.toLowerCase().trim())
    );

    return resultado;
}

// Abrir modal con video
function abrirModal(url, titulo) {
  document.getElementById("videoModalLabel").textContent = titulo;
  videoFrame.src = url + "?autoplay=1"; // autoplay opcional
  videoModal.show();
}

// Limpiar el iframe al cerrar el modal
document.getElementById('videoModal').addEventListener('hidden.bs.modal', () => {
  videoFrame.src = "";
});

// Reportar canal por medio de whatsapp
function reportarCanal(event, canal) {
  event.stopPropagation();

  const numero = '5219811241628'; // Tu número con LADA para WhatsApp
  const mensaje = encodeURIComponent(`🛑 Quiero reportar el canal: ${canal}`);
  const enlace = `https://wa.me/${numero}?text=${mensaje}`;

  window.open(enlace, '_blank');
}
