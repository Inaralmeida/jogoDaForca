import { createElement } from "./utils.js"

export const selectWord = (words) =>{
    const wordSelected = words[randomWord(words.length)]
    localStorage.setItem('word', wordSelected.palavra)
    localStorage.removeItem('letters')
    localStorage.setItem('letters', createdArrLetterCorrect(wordSelected.palavra.split('')))
    createdTips(wordSelected.dicas)
    createdSpaceLetter(wordSelected.palavra)
}


const createdSpaceLetter = (word) =>{
    const arrWord = word.split('')
    arrWord.forEach((letter)=>{
        const elTip = createElement('span', '', `containerLetra`)
        elTip.id =letter.toUpperCase()
        document.querySelector('#containerLetras').appendChild(elTip)
    })
}

const createdTips = (tips) =>{
    tips.forEach((tip, i) =>{
        const elTip = createElement('span', tip, 'dica', i)
        elTip.style.display= 'none'
        document.querySelector('#containerDicas').appendChild(elTip)
    })
}

const randomWord = (length) =>{
    const number = Math.floor(Math.random() * length)
    return number
}

const createdArrLetterCorrect = (word)=>{
    return  word.map((letter, i)=> i)

}