import { addPoints } from "./points.js";
import { updatedTips } from "./tips.js";
import $ from "./utils.js";

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

  return lettersCorrectUpdated;
};

export const printLettersCorrect = (lettersCorrect) => {
  const container = document.querySelectorAll(`.containerLetra`);

  container.forEach((element, i) => {
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
    document.querySelector("#containerLetras").appendChild(elTip);
  });
};
