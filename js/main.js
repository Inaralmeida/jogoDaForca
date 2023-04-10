import { addEventsButons, createButtonsLetters} from "./buttons.js";
import { letterData, wordData} from "./data.js";
import { selectWord } from "./word.js";


const teclado = document.querySelector('#teclado')
const btnTips = document.querySelectorAll('.btnDica')

createButtonsLetters(teclado, letterData)
selectWord(wordData)

addEventsButons(btnTips)