// Crear un nuevo elemento script
const script = document.createElement('script');

// Definir la carga útil de XSS
script.innerHTML = "alert('XSS Vulnerability Detected');";

// Añadir el script al cuerpo del documento para ejecutarlo
document.body.appendChild(script);
