import { printLettersCorrect, updatedLettersCorrect } from "./letters.js";
import { openModalLoser } from "./modal.js";
import $ from "./utils.js";

export const createButtonsLetters = (id, letras) => {
  letras.forEach((letra) => {
    const btn = $.createElement("button", letra, "btn-letra", "", letra);
    btn.onclick = () => handleClickLetter(btn);
    id.appendChild(btn);
  });
};

export const handleClickLetter = (button) => {
  const letter = button.value;
  const word = $.getLocalStorage("word").toUpperCase();

  if (word.indexOf(letter) > -1) {
    printLettersCorrect(updatedLettersCorrect(letter, word));
    addClassButton("certa", button);
  } else {
    addClassButton("errada", button);
    createBodyByError(letter);
  }
};

const addClassButton = (type, element) => {
  element.classList.add(type);
};

const createBodyByError = (letter) => {
  const lettersWrong = $.getLocalStorage("lettersWrong");
  lettersWrong.push(letter);
  const errors = {
    1: ".cabeca",
    2: ".corpo",
    3: ".bracoD",
    4: ".bracoE",
    5: ".pernaD",
    6: ".pernaE",
  };
  const element = document.querySelector(errors[lettersWrong.length]);
  $.setDisplayElement(element, "inline-block");
  $.setLocalStorage("lettersWrong", lettersWrong);
  if (lettersWrong.length == 6) {
    openModalLoser();
  }
};

export const addEventsButons = (listButons, func) => {
  listButons.forEach((btn, i) => {
    btn.addEventListener("click", (e) => func(e, i, btn));
  });
};
