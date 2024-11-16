const amarillo = document.querySelector('#amarillo')
const morado = document.querySelector('#morado')
const rosa = document.querySelector('#rosa')
const btn = document.querySelector('#btn')
const mensaje = document.querySelector('#mensaje')

btn.addEventListener('click', () => {
    let valorTotal =  Number(amarillo.value) + Number(morado.value) + Number(rosa.value)
    if(valorTotal <=10){
        mensaje.innerHTML = 'Llevas ' + valorTotal + ' stikers'
    } 
    else {
         mensaje.innerHTML = 'Levas demasiados stikers'
    }
})
