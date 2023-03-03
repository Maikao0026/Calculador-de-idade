function verificar() 
{
  const anoAtual = new Date().getFullYear();
  const anoDeNacimento = document.getElementById('anoDeNacimento').value
  const paragrafoDaResposta = document.querySelector('div#resposta>p')
  
  if(anoDeNacimento.length == 0 || anoDeNacimento > anoAtual)
    {
      alert('ERRO')
    }else
    {
        const seletorDeSexo = document.getElementsByName('seletorDeSexo')
        const idade = anoAtual - anoDeNacimento
        let genero = ''
        const img = document.createElement('img')
        //img.id ='foto'

      if (seletorDeSexo[0].checked) 
      {
        genero = 'Homem'
        if (idade < 13) {
          img.src = "./resources/criançaH.jpg";
        } else if (idade < 30) {
          img.src = "./resources/jovemH.jpg";
        } else if (idade < 50) {
          img.src = "./resources/adultoH.jpg";
        } else {
          img.src = "./resources/idosoH.jpg";
        }
      }else
      {
        genero = 'Mulher'
        if (idade < 10) {
          img.src = './resources/criançaM.jpg'
        } else if (idade < 30) {
          img.src = './resources/jovemM.jpg'
        } else if (idade < 50) {
          img.src = './resources/adultoM.jpg'
        } else {
          img.src = './resources/idosoM.jpg'
        }
      }
      document.getElementById('resposta').style.textAlign = 'center'
      paragrafoDaResposta.innerText = `${genero} com ${idade} anos`
      paragrafoDaResposta.append(document.createElement('br'), img)
    }
}
    
    
  