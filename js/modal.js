import $ from "./utils.js";
import doc from "./elementos.js";
const { modalEl, modalStart, modalLoser, modalwin } = doc.modal;
export const closeModal = () => {
  $.setDisplayElement(modalEl, "none");
  $.setDisplayElement(modalStart, "none");
  $.setDisplayElement(modalLoser, "none");
  $.setDisplayElement(modalwin, "none");
};

export const openModalStart = () => {
  $.setDisplayElement(modalEl, "flex");
  $.setDisplayElement(modalStart, "flex");
};

export const modalWin = () => {
  setTimeout(() => {
    $.setDisplayElement(modalEl, "flex");
    $.setDisplayElement(modalwin, "flex");
  }, 300);
};
export const openModalLoser = () => {
  pTotalPalavras.innerText = $.getLocalStorage("totalWords");
  setTimeout(() => {
    $.setDisplayElement(modalEl, "flex");
    $.setDisplayElement(modalLoser, "flex");
  }, 300);
};
