// DOM

const real = document.querySelector('#real')
const botao = document.querySelector('#botao')
const resultado = document.querySelector('#resultado')

//EVENTOS

botao.addEventListener('click', convergencia)

// FUNÇAO

function convergencia(){
    r = Number(real.value)
    conversao = r/5.41
    resultado.textContent =`O valor em Dolar e US$ ${conversao.toFixed(2)}`
}