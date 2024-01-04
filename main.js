function tocaSom(idElementoAudio) {
  document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll(".tecla");
let contador = 0;

while (contador < listaDeTeclas.length) {
  //Cria uma constante  tecla para armazenar a rotina da listaDeTeclas
  const tecla = listaDeTeclas[contador];

  //cria um constante instrumento para armazena a rotina anterior acessando o método .classList que retorna a posição de cada elemento dentro da lista da classe, logo defina a posição da lista retornada referente ao valor entre [].
  const instrumento = tecla.classList[1];

  //Cria uma constante idAudio para armazenar o valor estático (#som_) + valor dinamico do instrumento ${instrumento};
  const idAudio = `#som_${instrumento}`;


  tecla.onclick = function () {
    tocaSom(idAudio);
  };
  contador++;
  console.log(contador);
}
/**
 * OBS:
 * Devido as restrições dos browsers, não se pode executar um player (som) sem que antes o usuário
   interaja coma página, lógo na ln11, se fez necessário a utilização de uma função anônima para 
   chamarmos a função necessária, pois o se envocada a função com parametro diretamente o play() ln3
   não funcionará devido a restrição dita antetiomente, visto que, ao declarar a função ela já é envocada diretamente.
 */
