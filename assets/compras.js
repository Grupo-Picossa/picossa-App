const comprasBtn = document.getElementById('grabarBtn')

const formulario = document.getElementById('formulariocompras')

//eventlistener
eventlistener()

function eventlistener(){

formulario.addEventListener('submit',capturarDatos)

document.addEventListener('DOMContentLoaded',iniciarCompras)


}



//funciones

function iniciarCompras(){

    
}

function capturarDatos(e){
    e.preventDefault()
    
    const ordenPedido = document.getElementById('ordenpedido').value
    const costoEnvio = document.getElementById('costoEnvio').value
    const trm= document.getElementById('trm').value
    const fecha = document.getElementById('fecha').value
    

    const referencia = document.getElementById('referencia').value
    const descripcion = document.getElementById('descripcion').value
    const talla = document.getElementById('talla').value
    const peso = document.getElementById('peso').value
    const cantidad = document.getElementById('cantidad').value    
    const precio = document.getElementById('precio').value
    
    
    
    
    



console.log(ordenPedido)



}

