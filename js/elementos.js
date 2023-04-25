//Modals
const modalEl = document.querySelector("#modal");
const modalStart = document.querySelector(".modal-content-start");
const modalwin = document.querySelector(".modal-content-win");
const modalLoser = document.querySelector(".modal-content-loser");
const modalEndGame = document.querySelector(".modal-content-finish");

//btns
const btnStart = document.querySelector("#start-game");
const btnNextWord = document.querySelector("#next-word");
const btnsRestart = document.querySelectorAll("#restart");
const btnEndGame = document.querySelector("#end-game");
const btnTips = document.querySelectorAll(".btnDica");

//elements text
const pTotalPalavras = document.querySelectorAll(".totalPalavras");
const pPlayerName = document.querySelectorAll(".playerName");
const pPontos = document.querySelectorAll(".pontos");

//containers
const teclado = document.querySelector("#teclado");
const containerLetras = document.querySelector("#containerLetras");
const containerLetraArr = document.querySelectorAll(".containerLetra");
const categoria = document.querySelector(".categoria");
const main = document.querySelector("main");

//inputs
const namePlayer = document.querySelector("#name-player");

export default {
  modal: {
    modalEl,
    modalStart,
    modalwin,
    modalLoser,
    modalEndGame,
  },
  btns: {
    btnStart,
    btnNextWord,
    btnsRestart,
    btnTips,
    btnEndGame,
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
    categoria,
    main,
  },
  inputs: {
    namePlayer,
  },
};
