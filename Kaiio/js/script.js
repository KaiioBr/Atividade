//DOM

const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const botao = document.querySelector('#botao')
const resultado = document.querySelector('#resultado')

// Evento

botao.addEventListener('click', imc)

function imc(){
    p = Number(peso.value)
    a = Number(altura.value)
    calculo = p / (a * a)
    if(calculo<18.5){
        situacao = 'Magreza'
    }else if(calculo>=18.5 && calculo<24.9){
        situacao = 'Peso Ideal'
    }else if(calculo>24.9 && calculo<30){
        situacao = 'Sobrepeso'
    }else{
        situacao = 'Obesidade'
    }
    resultado.textContent = `o seu imc é ${calculo.toFixed(1)}, voce esta com ${situacao}`
}