const palabras = ["flores", "violin", "dibujo", "animal", "bistec"];
let palabraSeleccionada = '';
let intentos = 0;
let errores = 0;

document.getElementById('random').addEventListener('click', function() {
    palabraSeleccionada = palabras[Math.floor(Math.random() * palabras.length)];
    mostrarLetrasDes();
});

//no entendi pq no me aparece la palabra hasta q le doy click a random ._.

function desordenarPal(palabra) {
    return palabra.split('').sort(() => Math.random() - 0.5).join('');
}

function mostrarLetrasDes() {
    const palDesordenada = desordenarPal(palabraSeleccionada);
    const contenedor = document.getElementById('palabra-contenedor');
    contenedor.innerHTML = ''; 

    palDesordenada.split('').forEach(letra => {
        const span = document.createElement('span');
        span.textContent = letra;
        span.classList.add('letra');
        contenedor.appendChild(span);
    });
}

function verificarPalabra() {
    const inputs = document.querySelectorAll('.inputs-letras input');
    let palIngresada = '';

    inputs.forEach(input => {
        palIngresada += input.value;
    });

    if (palIngresada.length === palabraSeleccionada.length) {
        intentos++;
        if (palIngresada === palabraSeleccionada) {
            alert("Ganaste");
        } else {
            alert("Perdiste");
        }
        document.getElementById('intentos').innerText = intentos;
    }
}
document.querySelectorAll('.inputs-letras input').forEach(input => {
    input.addEventListener('input', verificarPalabra);
});

document.getElementById('reset').addEventListener('click', function() {
   const contenedor = document.getElementById('inputs-letras')
contenedor.innerHTML = ''
});