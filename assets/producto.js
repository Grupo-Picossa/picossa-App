// capturar Datos
const formulario = document.getElementById("crear-producto");
const formConsulta = document.getElementById("consultar-producto");
const productoBtn = document.getElementById('productoBtn')
const crearBtn = document.getElementById('crearBtn')



const referencia = document.getElementById("ref")
const descripcion = document.getElementById("descripcion")
const talla = document.getElementById("talla")

const consutarProducto = document.getElementById("consulta")


// addEventListener//
eventlistener()

function eventlistener(){

document.addEventListener('DOMContentLoaded',iniciarproducto)
console.log(crearBtn)


referencia.addEventListener('blur',validarCampo)
descripcion.addEventListener('blur',validarCampo)
talla.addEventListener('blur',validarCampo)
consutarProducto.addEventListener('blur',validarCampo)


//Evento Captura datos de crear producto//
formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  
 
const referencia = document.getElementById("ref").value;
const descripcion = document.getElementById("descripcion").value;
const talla = document.getElementById("talla").value;

  console.log(referencia);
  console.log(descripcion);
  console.log(talla);
 

});


//Evento Consulta De producto
formConsulta.addEventListener("submit",function(e){
e.preventDefault()

const consutarProducto = document.getElementById("consulta").value;
console.log(consutarProducto)
}); 


}

 

// funciones
function iniciarproducto(){
productoBtn.disabled = true
crearBtn.disabled = true
}

//validad campos de los formulario//

function validarCampo (){


  validarLongitud(this)

  if(referencia.value !== ""&& descripcion.value !== "" ){
   crearBtn.disabled = false
  }


  if(consutarProducto.value !== ""){

  productoBtn.disabled= false
  }

}

function validarLongitud(campo){

if(campo.value.length > 0){

  campo.style.borderColor = "green"
  campo.classList.remove('error')

}else{
  campo.style.borderColor = "red"
  campo.classList.add('error')
}

}