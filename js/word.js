import $ from "./utils.js";

export const selectWord = (words) => {
  const wordSelected = words[randomWord(words.length)];
  $.setLocalStorage("word", wordSelected.palavra);
  return wordSelected;
};

const randomWord = (length) => {
  const number = Math.floor(Math.random() * length);
  return number;
};
