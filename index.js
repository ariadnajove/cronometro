function $(selector) {
  return document.querySelector(selector);
}

const miCumple = new Date("2026-06-03T00:00:00");

function conversorSegundos(segundos) {
  const dias = Math.floor(segundos / (60 * 60 * 24));
  const horas = Math.floor((segundos % (60 * 60 * 24)) / (60 * 60));
  const minutos = Math.floor((segundos % (60 * 60)) / 60);
  const segundosRestantes = segundos % 60;

  return {
    dias,
    horas,
    minutos,
    segundos: segundosRestantes
  };
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
    $("body").classList.add("red");
    confetti();
    clearInterval(intervalo);
    return;
  }

  const tiempo = conversorSegundos(segundosFaltan);
  pintameElCrono(tiempo);
}

actualizarCrono();
const intervalo = setInterval(actualizarCrono, 1000);