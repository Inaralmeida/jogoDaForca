import { addEventsButons, createButtonsLetters} from "./buttons.js";
import { letterData, wordData} from "./data.js";
import { createdArrLettersCorrect, createdSpaceLetters } from "./letters.js";
import { setPoints } from "./points.js";
import { createdTips } from "./tips.js";
import $ from "./utils.js";
import { selectWord } from "./word.js";


const teclado = document.querySelector('#teclado')
const btnTips = document.querySelectorAll('.btnDica')

const startGame = ()=>{
  createButtonsLetters(teclado, letterData)

  const wordSelected = selectWord(wordData)
  $.resetLocalStorage('letters', createdArrLettersCorrect(wordSelected.palavra.split('')))
  $.resetLocalStorage('lettersWrong', [])

  createdTips(wordSelected.dicas)
  createdSpaceLetters(wordSelected.palavra)
  addEventsButons(btnTips)

  setPoints(0)
}

startGame()




