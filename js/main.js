import { handleClickLetter } from "./buttons.js";
import { letterData } from "./data.js";
import { closeModal, openModalEndGame, openModalStart } from "./modal.js";
import { newGame, startGame, resetScreen } from "./startGame.js";
import $ from "./utils.js";
import doc from "./elementos.js";

const { btns } = doc;

btns.btnStart.addEventListener("click", () => {
  closeModal();
  startGame();
});

btns.btnNextWord.addEventListener("click", () => {
  closeModal();
  newGame();
});

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
