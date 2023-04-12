import { printLettersCorrect, updatedLettersCorrect } from "./letters.js";
import { createElement } from "./utils.js";

export const createButtonsLetters = (id, letras) => {
  letras.forEach((letra) => {
    const btn = createElement("button", letra, "btn-letra", "", letra);
    btn.onclick = () => handleClickLetter(btn);
    id.appendChild(btn);
  });
};

const handleClickLetter = (button) => {
  const letter = button.value;
  const word = window.localStorage.getItem("word").toUpperCase();
  const lettersWrong = JSON.parse(window.localStorage.getItem("lettersWrong"))

  if (word.indexOf(letter) > -1) {
    printLettersCorrect(updatedLettersCorrect(letter, word));
    addStyledButton("certa", button);
  } else {
    addStyledButton("errada", button);
    lettersWrong.push(letter)
    createBody(lettersWrong.length)
    window.localStorage.setItem("lettersWrong", JSON.stringify(lettersWrong))
  }
};

const addStyledButton = (type, element) => {
  element.classList.add(type);
};

export const addEventsButons = (listButons) =>{
  listButons.forEach((btn, i )=>{
    btn.addEventListener('click', (e)=>handleClickTip(e, i))
})
}

 const handleClickTip = (e, id)=>{
    e.preventDefault()
    document.querySelectorAll('.dica').forEach((tip, i )=>{
        if(i == id){
            tip.style.display = 'flex'
        }
    })
}

const createBody = (lettersWrong) =>{

  const errors = {
    1: ".cabeca",
    2: ".corpo",
    3: ".bracoD",
    4: ".bracoE",
    5: ".pernaD",
    6: ".pernaE"
  }

  document.querySelector(errors[lettersWrong]).style.display = 'inline-block'
}