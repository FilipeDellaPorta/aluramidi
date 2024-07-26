// alert('Olá mundo'); ctrl + k + c


function tocaSom(seletorAudio){

const elemento = document.querySelector(seletorAudio);

if (elemento /*!== null*/ && elemento.localName === 'audio') { 
  
    elemento.play();
 
} else {

  console.log('Elemento não encontrado ou seletor inválido');
}

//console.log(elemento);

}

const listaDeTeclas = document.querySelectorAll('.tecla');




for (let i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i]

    const nomeDaTecla = tecla.classList[1];

    //template string
    const idAudio = `#som_${nomeDaTecla}`;

    // funcoes anonimas
    tecla.onclick = function () {
      tocaSom(idAudio);
      tecla.classList.add('ativa');
      setTimeout(function () {
        tecla.classList.remove('ativa');
    }, 125); //milisegundos
  }

    tecla.onkeydown = function (evento) {
        if (evento.keyCode === 32 || evento.keyCode === 13) {
        tecla.classList.add('ativa');
        }
    }
  
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
   
  }
}
