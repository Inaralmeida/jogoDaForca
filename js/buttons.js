import { printLettersCorrect, updatedLettersCorrect } from "./letters.js";
import { createElement } from "./utils.js";

export const createButtonsLetters = (id, letras) => {
    letras.forEach((letra) => {
      const btn = createElement("button", letra, "btn-letra", "", letra);
      btn.onclick = () => handleClickLetter(btn);
      id.appendChild(btn);
    });
  };
  
  export const handleClickLetter = (button) => {
    const letter = button.value;
    const word = window.localStorage.getItem("word").toUpperCase();
    
    if (word.indexOf(letter) > -1) {
      
      printLettersCorrect(updatedLettersCorrect(letter, word))
      addStyledButton("certa", button);
      
    } else {
      addStyledButton("errada", button);
    }
  };
  
  const addStyledButton = (type, element) => {
    element.classList.add(type);
  };