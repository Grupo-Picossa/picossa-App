// capturar Datos
const formulario = document.getElementById("crear-producto");
const formConsulta = document.getElementById("consultar-producto");
// addEventListener//
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
