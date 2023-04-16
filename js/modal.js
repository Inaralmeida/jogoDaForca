const modalEl = document.querySelector("#modal");
const modalStart = document.querySelector(".modal-content-start");
const modalwin = document.querySelector(".modal-content-win");
const modalLoser = document.querySelector(".modal-content-loser");

import $ from "./utils.js";

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
  setTimeout(() => {
    $.setDisplayElement(modalEl, "flex");
    $.setDisplayElement(modalLoser, "flex");
  }, 300);
};
