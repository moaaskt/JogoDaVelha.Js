var proximaJogada = 'X'
var vencedor ='ninguem'
var jogo = 0
var contador = 0
var exe = 0


function tratarbBotao(botao)

{
    contador++
    var indentificador = 'butao' + botao
    if(document.getElementById(indentificador).innerText == '')
    


   document.getElementById(indentificador).innerText = proximaJogada

    if(proximaJogada == 'X')
    {
        proximaJogada= 'O'
    }else
    {
        proximaJogada= 'X'
    }verificarVencedor()

    if (contador == 9 && exe == 0) {
        document.getElementById('resultado1').innerHTML = '<img src="https://i.im.ge/2021/11/01/owih9C.png" alt="">'
                
            }

  
}