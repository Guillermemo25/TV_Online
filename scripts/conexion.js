if ('connection' in navigator) {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

    const tipoConexion = connection.effectiveType; // ej: '4g', '3g', 'wifi', etc.
    console.log("Tipo de conexión:", tipoConexion);
    if (tipoConexion.includes('cellular') || tipoConexion === '3g' || tipoConexion === '2g' || tipoConexion === 'slow-2g') {
        alert("Estás usando datos móviles. Esta app puede consumir tu plan de datos.");
    } else if (tipoConexion === 'wifi' || tipoConexion === 'ethernet') {
        console.log("Estás en una red Wi-Fi.");
    }
}