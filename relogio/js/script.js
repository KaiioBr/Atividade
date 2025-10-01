//DOM

const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')

// Eventos

setInterval(relogio, 1000)

// funçoes

function relogio(){
    
    hoje = new Date()

    hr = hoje.getHours()
    min = hoje.getMinutes()
    seg = hoje.getSeconds()

    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = seg
}

if(hr<10){
    hr = '0'+hr
}
if(min<10){
    min = '0'+min
}
 if(seg<10){
    seg = '0'+seg
}

horas.textContent = hr
minutos.textContent = min
segundos.textContent = seg