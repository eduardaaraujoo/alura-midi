//p/ usar o elemento audio do html devemos chamar a função querySelector pois ela faz uma busca pelo seletor HTML e colocar o parâmetro entre ()
function tocaSom(seletorAudio) {
   const elemento = document.querySelector(seletorAudio);

   //usar a condição (e &&)
   //se elemento existe ou seja que seja valor e NÃO seja nulo/inválido/texto vazio 
   if(elemento && elemento.localName === 'audio') {
        elemento.play();
   } else {
    console.log('Elemento não encontrado ou seletor inválido')
   }
}
//p/deixar o código mais legível, criando uma constância:
const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`; //template string
    
    tecla.onclick = function() {
        tocaSom(idAudio);
    }
    
    tecla.onkeydown = function(evento) {
        //condição ai embaixo seria: se a tecla for space (espaço) ou for a tecla for enter, então add a classe ativa
        if(evento.code === 'Space'|| evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}



