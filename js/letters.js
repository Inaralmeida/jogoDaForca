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

const updatedLettersCorrect = (letter, word)=>{

  const lettersCorrect = window.localStorage.getItem("letters").split(',')
  const wordArr = word.split('')

  const lettersCorrectUpdated = wordArr.map((l, i)=>{
    if(l == letter && lettersCorrect[i] == i){
      return l
    }else{
      return lettersCorrect[i]
    }
  })
  window.localStorage.setItem("letters", lettersCorrectUpdated)

  return lettersCorrectUpdated
}

const printLettersCorrect = (lettersCorrect) =>{
  const container = document.querySelectorAll(`.containerLetra`);

  container.forEach((element, i)=>{
    if(element.id === lettersCorrect[i]){
      element.innerHTML = ''
      const elP = createElement("p", lettersCorrect[i], "letra");
      element.appendChild(elP)
    }
  })
}