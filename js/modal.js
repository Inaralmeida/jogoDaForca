import doc from "./elementos.js";
import $ from "./utils.js";
const { modalEl, modalStart, modalLoser, modalwin, modalEndGame, modalGetName} = doc.modal;
const { pTotalPalavras, pPontos, pPlayerName } = doc.elTxt;

export const closeModal = () => {
  $.setDisplayElement(modalEl, "none");
  $.setDisplayElement(modalStart, "none");
  $.setDisplayElement(modalLoser, "none");
  $.setDisplayElement(modalwin, "none");
  $.setDisplayElement(modalEndGame, "none");
  $.setDisplayElement(modalGetName, "none");
};

export const openModalStart = () => {
  $.setDisplayElement(modalEl, "flex");
  $.setDisplayElement(modalStart, "flex");
};
export const openModalGetName = () => {
  $.setDisplayElement(modalStart, "none");
  $.setDisplayElement(modalEl, "flex");
  $.setDisplayElement(modalGetName, "flex");
};




export const modalWin = () => {
  setTimeout(() => {
    $.setDisplayElement(modalEl, "flex");
    $.setDisplayElement(modalwin, "flex");
  }, 300);
};

export const openModalLoser = () => {
  $.setTextByElement(pTotalPalavras, $.getLocalStorage("totalWords"));
  $.setTextByElement(pPontos, $.getLocalStorage("points"));
  $.setDisplayElement(modalEl, "flex");
  $.setDisplayElement(modalLoser, "flex");
};

export const openModalEndGame = () => {
  $.setTextByElement(pPlayerName, $.getLocalStorage("PlayerName"));
  $.setTextByElement(pTotalPalavras, $.getLocalStorage("totalWords"));
  $.setTextByElement(pPontos, $.getLocalStorage("points"));
  $.setDisplayElement(modalEl, "flex");
  $.setDisplayElement(modalEndGame, "flex");
};
