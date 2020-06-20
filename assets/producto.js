// capturar Datos
const formulario = document.getElementById("crear-producto");
const formConsulta = document.getElementById('form-consultar')

// addEventListener
eventlistener();

function eventlistener() {
  formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const referencia = document.getElementById("ref").value;
    const descripcion = document.getElementById("descripcion").value;
    const talla = document.getElementById("talla").value;
    const precio = document.getElementById("precio").value;
    

    console.log(referencia);
    console.log(descripcion);
    console.log(talla);
    console.log(precio);

})

formConsulta.addEventListener('submit',function(e){
  e.preventDefault()
  const consutarProducto = document.getElementById('consultar-producto').value

  console.log(consutarProducto)
  });
}

// funciones
