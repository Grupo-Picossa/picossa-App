// capturar Datos
const formulario = document.getElementById("crear-producto");

// addEventListener
eventlistener();

function eventlistener() {
  formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    const referencia = document.getElementById("ref").value;
    const descripcion = document.getElementById("descripcion").value;
    const talla = document.getElementById("talla").value;
    // let TallaSelecionada=talla.options[talla.selectedIndex].text

    const precio = document.getElementById("precio").value;

    const boton = document.getElementById("crearBtn");

    console.log(referencia);
    console.log(descripcion);
    console.log(talla);
    console.log(precio);




  });
}

// funciones
