import { modalWin } from "./modal.js";
import { addPoints, totalWordsCorrect } from "./points.js";
import { updatedTips } from "./tips.js";
import doc from "./elementos.js";
import $ from "./utils.js";

const { containers } = doc;

export const updatedLettersCorrect = (letter, word) => {
  const lettersCorrect = $.getLocalStorage("letters");
  const wordArr = word.split("");

  const lettersCorrectUpdated = wordArr.map((l, i) => {
    if (l == letter && lettersCorrect[i] == i) {
      addPoints();
      updatedTips();
      return l;
    } else {
      return lettersCorrect[i];
    }
  });
  $.setLocalStorage("letters", lettersCorrectUpdated);
  hasWin(lettersCorrect, wordArr);
  return lettersCorrectUpdated;
};

export const printLettersCorrect = (lettersCorrect) => {
  const containerLetraArr = document.querySelectorAll(".containerLetra");
  containerLetraArr.forEach((element, i) => {
    if (element.id === lettersCorrect[i]) {
      element.innerHTML = "";
      const elP = $.createElement("p", lettersCorrect[i], "letra");
      element.appendChild(elP);
    }
  });
};

export const createdArrLettersCorrect = (word) => {
  return word.map((letter, i) => i);
};

export const createdSpaceLetters = (word) => {
  const arrWord = word.split("");
  arrWord.forEach((letter) => {
    const elTip = $.createElement("span", "", `containerLetra`);
    elTip.id = letter.toUpperCase();
    containers.containerLetras.appendChild(elTip);
  });
};

export const hasWin = (lettersArr, wordArr) => {
  const lettersCorrected = $.getLocalStorage("letters").join("");
  const wordCorrected = $.getLocalStorage("word").toUpperCase();

  if (lettersCorrected === wordCorrected) {
    totalWordsCorrect();
    modalWin();
  }
};
