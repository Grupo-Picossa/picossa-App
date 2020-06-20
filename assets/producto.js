// capturar Datos
const formulario = document.getElementById("crear-producto");
const formConsulta = document.getElementById("consultar-producto");
const productoBtn = document.getElementById('productoBtn')
// addEventListener//
eventlistener()

function eventlistener(){

document.addEventListener('DOMContentLoaded',iniciarproducto)

}

 formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const referencia = document.getElementById("ref").value;
    const descripcion = document.getElementById("descripcion").value;
    const talla = document.getElementById("talla").value;
    
    

    console.log(referencia);
    console.log(descripcion);
    console.log(talla);
   

});

formConsulta.addEventListener("submit",function(e){
  e.preventDefault()
  const consutarProducto = document.getElementById("consulta").value;

  console.log(consutarProducto)
  }); 

// funciones
function iniciarproducto(){
productoBtn.disabled = true
}