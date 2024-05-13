import { createButtonsLetters } from "./buttons.js";
import { letterData, wordData } from "./data.js";
import doc from "./elementos.js";
import { createdArrLettersCorrect, createdSpaceLetters } from "./letters.js";
import { setPoints } from "./points.js";
import { createdTips, firstTip, handleClickTip, updatedTips } from "./tips.js";
import $ from "./utils.js";
import { selectWord } from "./word.js";

const { btns, elTxt, inputs, containers } = doc;

export const startGame = (newGame = true) => {
  if (newGame) {
    setPoints(0);
    $.setLocalStorage("totalWords", 0);
    $.setTextByElement(elTxt.pPlayerName, inputs.namePlayer.value);
    $.setLocalStorage("PlayerName", inputs.namePlayer.value);
  } else {
    $.setTextByElement(elTxt.pPlayerName, $.getLocalStorage("PlayerName"));
  }

  $.resetElement("#containerLetras");
  createButtonsLetters(containers.teclado, letterData);
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
  $.addEventsButons(btns.btnTips, handleClickTip);
  updatedTips();
};

export const newGame = () => {
  resetScreen();
  startGame(false);
};

export const resetScreen = () => {
  $.resetElement("#teclado", "innerHTML");
  $.resetElement("#containerLetras", "innerHTML");
  $.resetElement("#containerDicas", "innerHTML");
  $.resetElement("#name-player", "value");
  $.resetForca();
};
