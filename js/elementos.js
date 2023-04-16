//Modals
const modalEl = document.querySelector("#modal");
const modalStart = document.querySelector(".modal-content-start");
const modalwin = document.querySelector(".modal-content-win");
const modalLoser = document.querySelector(".modal-content-loser");

//btns
const btnStart = document.querySelector("#start-game");
const btnNextWord = document.querySelector("#next-word");
const btnRestart = document.querySelector("#restart");
const btnTips = document.querySelectorAll(".btnDica");

//elements text
const pTotalPalavras = document.querySelector("#totalPalavras");
const pPlayerName = document.querySelector(".playerName");
const pPontos = document.querySelector("#pontos");

//containers
const teclado = document.querySelector("#teclado");
const containerLetras = document.querySelector("#containerLetras");
const containerLetraArr = document.querySelectorAll(".containerLetra");

//inputs
const namePlayer = document.querySelector("#name-player");

export default {
  modal: {
    modalEl,
    modalStart,
    modalwin,
    modalLoser,
  },
  btns: {
    btnStart,
    btnNextWord,
    btnRestart,
    btnTips,
  },
  elTxt: {
    pTotalPalavras,
    pPlayerName,
    pPontos,
  },
  containers: {
    teclado,
    containerLetras,
    containerLetraArr,
  },
  inputs: {
    namePlayer,
  },
};
