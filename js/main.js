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

const startGame = () => {
  document.querySelector("#playerName").textContent = playerName.value;
  createButtonsLetters(teclado, letterData);

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

  setPoints(0);
};

btnStart.addEventListener("click", () => {
  closeModal();
  startGame();
});
