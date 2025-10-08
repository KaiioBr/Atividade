// DOM

const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos =  document.querySelector('#segundos')
const dataAtual = document.getElementById('data-atual')
const saudacao =  document.querySelector('#saudacao')
const fundo = document.querySelector('body')
const logo = document.querySelector('#logo')

// Funcionalidade do Relogio 

const relogio = setInterval(()=>{

    let dataDeHoje = new Date()
    let hr = dataDeHoje.getHours()
    let min = dataDeHoje.getMinutes()
    let sec = dataDeHoje.getSeconds()
    let dataDoDia = dataDeHoje.toLocaleDateString('pt-br')


    if(hr<10){
        hr = '0' + hr
    }
    if(min<10){
        min = '0' + min
    }
    if(sec<10){
        sec = '0' + sec
    }

    if(hr>=5 && hr<12){
        saudacao.textContent = "Bom dia !!"
        fundo.classList.add('dia')
        fundo.classList.remove('tarde')
        fundo.classList.remove('noite')
        logo.src = "images/sol.jpg"
    }else if(hr>=12 && hr<18){
        saudacao.textContent = "Boa Tarde !!"
        fundo.classList.add('tarde')
        fundo.classList.remove('dia')
        fundo.classList.remove('noite')
        logo.src = "images/sol.jpg"
    }else{
        saudacao.textContent = "Boa Noite"
        fundo.classList.add('noite')
        fundo.classList.remove('dia')
        fundo.classList.remove('tarde')
        logo.src = "images/lua.jpg"
    }



    horas.textContent = hr
    minutos.textContent = min
    segundos.textContent = sec
    dataAtual.textContent = dataDoDia

})