import { handleClickLetter } from "./buttons.js";
import { letterData } from "./data.js";
import doc from "./elementos.js";
import { closeModal, openModalEndGame, openModalGetName, openModalStart } from "./modal.js";
import { newGame, resetScreen, startGame } from "./startGame.js";
import $ from "./utils.js";

const { btns } = doc;

btns.btnStart.addEventListener("click", () => {
  closeModal();
  startGame();
});

btns.btnNextWord.addEventListener("click", () => {
  closeModal();
  newGame();
});

btns.btnPlay.addEventListener("click", () => {
  openModalGetName();
})
$.addEventsButons(btns.btnsRestart, () => {
  closeModal();
  resetScreen();
  openModalStart();
});

btns.btnEndGame.addEventListener("click", () => {
  closeModal();
  openModalEndGame();
});

document.addEventListener("keydown", (e) => {
  const valueKey = e.key;
  const indexValue = letterData.indexOf(valueKey.toUpperCase());
  if (indexValue > -1) {
    const btns = document.querySelectorAll(".btn-letra");
    handleClickLetter(btns[indexValue]);
  }
});
