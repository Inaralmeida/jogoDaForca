import { letrasData } from "./data.js";
import { createButtonsLetras } from "./functions.js";

const teclado = document.querySelector('#teclado')

createButtonsLetras(teclado, letrasData)