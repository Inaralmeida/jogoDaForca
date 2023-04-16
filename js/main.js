import { addEventsButons, createButtonsLetters } from "./buttons.js";
import { letterData, wordData } from "./data.js";
import { createdArrLettersCorrect, createdSpaceLetters } from "./letters.js";
import { closeModal } from "./modal.js";
import { setPoints } from "./points.js";
import { createdTips, handleClickTip, updatedTips } from "./tips.js";
import $ from "./utils.js";
import { selectWord } from "./word.js";

const teclado = document.querySelector("#teclado");
const btnTips = document.querySelectorAll(".btnDica");
const playerName = document.querySelector("#name-player");
const btnStart = document.querySelector("#start-game");
const btnNextWord = document.querySelector("#next-word");
const containerLetras = document.querySelector("#containerLetras");

const startGame = (newGame = true) => {
  createButtonsLetters(teclado, letterData);
  document.querySelector("#playerName").textContent = playerName.value;
  containerLetras.innerHTML = ``;
  const wordSelected = selectWord(wordData);
  $.resetLocalStorage(
    "letters",
    createdArrLettersCorrect(wordSelected.palavra.split(""))
  );
  $.resetLocalStorage("lettersWrong", []);
  $.resetLocalStorage("tipsEnabled", []);
  createdTips(wordSelected.dicas);
  createdSpaceLetters(wordSelected.palavra);
  addEventsButons(btnTips, handleClickTip);
  updatedTips();

  if (newGame) {
    setPoints(0);
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
};

btnStart.addEventListener("click", () => {
  closeModal();
  startGame();
});

btnNextWord.addEventListener("click", () => {
  closeModal();
  newGame();
});
