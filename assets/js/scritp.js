const primerNumero = document.querySelector('#primerNumero')
const segundoNumero = document.querySelector('#segundoNumero')
const tercerNumero = document.querySelector('#tercerNumero')
const parrafo = document.querySelector('p')

primerNumero.addEventListener('change', () => {
    valor1 = (primerNumero.value)
})
segundoNumero.addEventListener('change', () => {
    valor2 = (segundoNumero.value)
})
tercerNumero.addEventListener('change', () => {
    valor3 = (tercerNumero.value)
})
resultado.addEventListener('click', () => {
    console.log('hace click')
    if(primerNumero.value == 9 && segundoNumero.value == 1 && tercerNumero.value == 1) {
        parrafo.innerHTML = 'Contraseña 1 correcta'
    }
    else if(primerNumero.value == 7 && segundoNumero.value == 1 && tercerNumero.value == 4 ) {
        parrafo.innerHTML = 'Contraseña 2 correcta'
    }
    else {
        parrafo.innerHTML ='Contraseña incorrecta'
    }
})



