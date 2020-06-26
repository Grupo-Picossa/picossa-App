const comprasBtn = document.getElementById("grabarBtn");

const formulario = document.getElementById("formulariocompras");

//variables de los campos//
const ordenPedido = document.getElementById("ordenpedido");
const costoEnvio = document.getElementById("costoEnvio");
const trm = document.getElementById("trm");
const fecha = document.getElementById("fecha");

const referencia = document.getElementById("referencia");
const descripcion = document.getElementById("descripcion");
const talla = document.getElementById("talla");
const peso = document.getElementById("peso");
const cantidad = document.getElementById("cantidad");
const precio = document.getElementById("precio");
// boton para crear mas formularios//

const btnPlus = document.getElementById('Btnplus')
const contenerdorFormulario = document.getElementById('variableItems')

console.log(btnPlus)

//eventlistener
eventlistener();

function eventlistener() {
  formulario.addEventListener("submit", capturarDatos);

  document.addEventListener("DOMContentLoaded", iniciarCompras);

  //eventos validar campo//

  ordenPedido.addEventListener("blur", validarCampo);
  costoEnvio.addEventListener("blur", validarCampo);
  trm.addEventListener("blur", validarCampo);
  fecha.addEventListener("blur", validarCampo);

  referencia.addEventListener("blur", validarCampo);
    descripcion.addEventListener("blur", validarCampo);
    talla.addEventListener("blur", validarCampo);
    peso.addEventListener("blur", validarCampo);
    cantidad.addEventListener("blur", validarCampo);
    precio.addEventListener("blur", validarCampo);


//evento para boton plus//

btnPlus.addEventListener('click',crearFormulario)
  

  

}

//funciones

function iniciarCompras(e) {
  e.preventDefault();

  comprasBtn.disabled = true;
}

function capturarDatos(e) {
  e.preventDefault();

  const ordenPedido = document.getElementById("ordenpedido").value;
  const costoEnvio = document.getElementById("costoEnvio").value;
  const trm = document.getElementById("trm").value;
  const fecha = document.getElementById("fecha").value;

  const referencia = document.getElementById("referencia").value;
  const descripcion = document.getElementById("descripcion").value;
  const talla = document.getElementById("talla").value;
  const peso = document.getElementById("peso").value;
  const cantidad = document.getElementById("cantidad").value;
  const precio = document.getElementById("precio").value;

  console.log(ordenPedido);
}

function validarCampo() {
  
    if(ordenPedido.value !== ""&& costoEnvio.value !== "" && trm.value !== "" && fecha.value !== ""){
        comprasBtn.disabled = false
    }

  validarLongitud(this);
}

function validarLongitud(campo) {
  if (campo.value.length > 0) {
    campo.style.border = "1px solid green";
    campo.classList.remove("error");
  } else {
    campo.style.border = "1px solid red";
    campo.classList.add("error");
  }
}

function crearFormulario(){
    const contenedorFormulario = document.getElementById('formulariocompras')

    let html =  `
    <section  id="varibleItems"class="varible-items" >

            <div id="card-box" >
            <h2 class="compras-h2">Producto</h2>

            <label class="box-items" for="">Referencia</label>
            <input id="referencia" type="text">

            <label class="box-items" for="">Descripcion</label>
            <input  id="descripcion" type="text">

            <label class="box-items" for="">Talla</label>
            <select id="talla" name="" id="">
                <option value="">L</option>
                <option value="">XL</option>
                <option value="">3XL</option>
                <option value="">4XL</option>
            </select>

            <label class="box-items" for="">Peso</label>
            <input id="peso" type="number">

            <label class="box-items" for="">Cantidad</label>
            <input id="cantidad" type="number">

            <label class="box-items" for="">Precio</label>
            <input id="precio" type="number">

            <button id="Btnplus" class="Btnplus"> <i class="fas fa-plus"></i> </button>
        </div>

        </section>
    
    `
    
    contenedorFormulario.innerHTML += html

}