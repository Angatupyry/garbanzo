function pintarCajitas(cajitas) {
  if (cajitas.length) {
    return [...cajitas].forEach(pintarCajitas);
  }
  cajitas.style.background = "blue";
}

function agrandarCajita(e) {
  e.target.style.width = e.target.offsetWidth + 10 + "px";
  e.target.style.height = e.target.offsetHeight + 10 + "px";
}

const cajitaUno = document.getElementById("cajita-1");

pintarCajitas(cajitaUno);
