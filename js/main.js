import {
  addEventsButons,
  createButtonsLetters,
  handleClickLetter,
} from "./buttons.js";
import { letterData, wordData } from "./data.js";
import { createdArrLettersCorrect, createdSpaceLetters } from "./letters.js";
import { closeModal, openModalStart } from "./modal.js";
import { setPoints } from "./points.js";
import { createdTips, firstTip, handleClickTip, updatedTips } from "./tips.js";
import { selectWord } from "./word.js";
import $ from "./utils.js";
import doc from "./elementos.js";

const { btns, elTxt, inputs, containers } = doc;

const startGame = (newGame = true) => {
  createButtonsLetters(containers.teclado, letterData);

  elTxt.pPlayerName.text = inputs.namePlayer.value;
  containers.containerLetras.innerHTML = ``;

  const wordSelected = selectWord(wordData);
  $.resetLocalStorage(
    "letters",
    createdArrLettersCorrect(wordSelected.palavra.split(""))
  );
  $.setDisplayElement(containers.main, "flex");
  $.resetLocalStorage("lettersWrong", []);
  $.resetLocalStorage("tipsEnabled", []);
  firstTip(wordSelected.categoria);
  createdTips(wordSelected.dicas);
  createdSpaceLetters(wordSelected.palavra);
  addEventsButons(btns.btnTips, handleClickTip);
  updatedTips();

  if (newGame) {
    setPoints(0);
    $.setLocalStorage("totalWords", 0);
  }
};

const newGame = () => {
  resetScreen();
  startGame(false);
};

const resetScreen = () => {
  $.resetElement("#teclado");
  $.resetElement("#containerLetras");
  $.resetElement("#containerDicas");
  $.resetForca();
};

btns.btnStart.addEventListener("click", () => {
  closeModal();
  startGame();
});

btns.btnNextWord.addEventListener("click", () => {
  closeModal();
  newGame();
});

btns.btnRestart.addEventListener("click", () => {
  closeModal();
  resetScreen();
  openModalStart();
});

document.addEventListener("keydown", (e) => {
  const valueKey = e.key;
  const indexValue = letterData.indexOf(valueKey.toUpperCase());
  if (indexValue > -1) {
    const btns = document.querySelectorAll(".btn-letra");
    handleClickLetter(btns[indexValue]);
  }
});
