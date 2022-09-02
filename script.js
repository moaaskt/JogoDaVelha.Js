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
function verificarVencedor()
{
    var b1 = document.getElementById('butao1').innerText
    var b2 = document.getElementById('butao2').innerText
    var b3 = document.getElementById('butao3').innerText
    var b4 = document.getElementById('butao4').innerText
    var b5 = document.getElementById('butao5').innerText
    var b6 = document.getElementById('butao6').innerText
    var b7 = document.getElementById('butao7').innerText
    var b8 = document.getElementById('butao8').innerText
    var b9 = document.getElementById('butao9').innerText


if  (b1==b2 && b2==b3 && b1!="") {
   alert(b1 + ' ganhou!!!! ☺ ') 
    exe = 1
    
}

if (b1==b4 && b4==b7 && b1 !='') {
    alert(b1 + ' ganhou!!!! ☺ ') 
    exe = 1
    
  }

if (b1==b5 && b5==b9 && b1!=''){
    alert(b1 + ' ganhou!!!! ☺  ')  
    exe = 1
    
}
           
if (b4==b5 && b5==b6 && b4 !=''){
    alert(b4 + ' ganhou!!!! ☺ ') 
    exe = 1
    
  }

if (b7==b8 && b8==b9 && b7 !=''){
    alert(b7 + ' ganhou!!!! ☺ ') 
    exe = 1
    
 }

if (b2==b5 && b5==b8 && b2 !=''){
    alert(b2 + ' ganhou!!!! ☺ ')  
    exe = 1
    
}

if (b3==b6 && b6==b9 && b3 !=''){
    alert(b3 + ' ganhou!!!! ☺ ') 
    exe = 1
    
  }

if (b3==b5 && b5==b7 && b3 !=''){
    alert(b3 + ' ganhou!!!! ☺ ') 
    exe = 1
    
  }
}
