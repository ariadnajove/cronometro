function $(selector) {
  return document.querySelector(selector);
}

const miCumple = new Date("2026-06-03T00:00:00");


function conversorSegundos(segundos) {
  const dias = Math.floor(segundos / (60 * 60 * 24));
  const horas = Math.floor((segundos % (60 * 60 * 24)) / (60 * 60));
  const minutos = Math.floor((segundos % (60 * 60)) / 60);
  const segundosRestantes = segundos % 60;

  return { dias, horas, minutos, segundos: segundosRestantes };
}

function pintameElCrono(tiempo) {
  $("#temporizador #d").innerText = tiempo.dias;
  $("#temporizador #h").innerText =
    tiempo.horas < 10 ? "0" + tiempo.horas : tiempo.horas;
  $("#temporizador #m").innerText =
    tiempo.minutos < 10 ? "0" + tiempo.minutos : tiempo.minutos;
  $("#temporizador #s").innerText =
    tiempo.segundos < 10 ? "0" + tiempo.segundos : tiempo.segundos;
}

function actualizarCrono() {
  const hoy = Date.now();
  const segundosFaltan = Math.floor((miCumple - hoy) / 1000);

  if (segundosFaltan <= 0) {
    document.body.classList.add("red");
    confetti();
    clearInterval(intervalo);
    return;
  }

  const tiempo = conversorSegundos(segundosFaltan);
  pintameElCrono(tiempo);
}

actualizarCrono();
const intervalo = setInterval(actualizarCrono, 1000);



const musica = document.getElementById("musica");
const audioIcon = document.getElementById("audioIcon");

const iconoMute =
  "https://static.thenounproject.com/png/1331692-200.png";

const iconoSound =
  "https://cdn-icons-png.flaticon.com/512/59/59284.png";

let sonando = false;

audioIcon.addEventListener("click", () => {
  if (!sonando) {
    musica.play();
    audioIcon.src = iconoSound;
    sonando = true;
  } else {
    musica.pause();
    musica.currentTime = 0;
    audioIcon.src = iconoMute;
    sonando = false;
  }
});


const botonSorpresa = document.getElementById("confetti-button");
const titulo = document.querySelector("h1");

botonSorpresa.addEventListener("click", () => {
  // Confetti izquierda
  confetti({
    position: { x: 0, y: 0.5 },
    count: 80,
    size: 1,
    velocity: 180,
    fade: false
  });

  // Confetti derecha
  confetti({
    position: { x: 1700, y: 0.5 },
    count: 80,
    size: 1,
    velocity: 180,
    fade: false
  });

  // Toggle de animaciones (FONDO + BOTÓN + etc.)
  document.body.classList.toggle("party");
  titulo.classList.toggle("titulo-party");
});