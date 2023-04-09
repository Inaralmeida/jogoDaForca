import { createElement } from "./utils.js";



export const updatedLettersCorrect = (letter, word)=>{

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

export const printLettersCorrect = (lettersCorrect) =>{
  const container = document.querySelectorAll(`.containerLetra`);

  container.forEach((element, i)=>{
    if(element.id === lettersCorrect[i]){
      element.innerHTML = ''
      const elP = createElement("p", lettersCorrect[i], "letra");
      element.appendChild(elP)
    }
  })
}