import $ from "./utils.js";
const pontos = document.querySelector("#pontos");

export const setPoints = (points, add = true) => {
  $.setLocalStorage("points", points);
  pontos.textContent = points;
};

export const addPoints = (points = 10) => {
  const totalPoints = $.getLocalStorage("points");
  const newTotal = Number(totalPoints) + points;
  pontos.textContent = newTotal;
  setPoints(newTotal);
};

export const removePoints = (points = 10) => {
  const totalPoints = $.getLocalStorage("points");
  const newTotal = Number(totalPoints) - points;
  pontos.textContent = newTotal;
  setPoints(newTotal);
};
