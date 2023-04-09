import { letterData, wordData} from "./data.js";
import { createButtonsLetters} from "./functions.js";
import { selectWord } from "./word.js";


const teclado = document.querySelector('#teclado')

createButtonsLetters(teclado, letterData)

selectWord(wordData)
