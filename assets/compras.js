const comprasBtn = document.getElementById('comprasBtn')



//eventlistener
eventlistener()

function eventlistener(){

document.addEventListener('DOMContentLoaded',iniciarCompras)


}

console.log(comprasBtn)

//funciones

function iniciarCompras(){
    
    comprasBtn.disabled = true
    
}