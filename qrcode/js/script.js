//DOM (Anexar os elementos do Html que eu desejo usar)

const texto = document.querySelector("#texto")
const botao = document.querySelector("#botao")
const qrcode = document.querySelector("#qrcode")

//Evento (Oque eu faço e oq acontece)

botao.addEventListener('click',gerador)
texto.addEventListener('keydowm',(event)=>{
    if(event.key=='Enter'){
        gerador()
    }
})

//Funçao ()

function gerador(){

    textao = texto.value

    if(textao){

        qrcode.innerHTML = ''

        code = new QRCode(qrcode,{
            text:textao, 
            width:400,
            height:400,
            colorDark:'white',
            colorLight:'black'
        })

    }else{
        alert('Seu burro, digite algua coisa')
    }
}