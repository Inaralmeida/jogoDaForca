const createElement = (tag, content, className, id = "", value = "") => {
  const element = document.createElement(tag);
  element.textContent = content;
  element.id = id;
  element.value = value;
  element.classList.add(className);
  return element;
};

const addEventsButons = (listButons, action) => {
  listButons.forEach((btn, i) => {
    btn.addEventListener("click", (e) => action(e, i));
  });
};

const setLocalStorage = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorage = (key) => {
  const data = JSON.parse(window.localStorage.getItem(key));
  return data;
};

const removeLocalStorage = (key) => {
  window.localStorage.removeItem(key);
};

const resetLocalStorage = (key, value) => {
  removeLocalStorage(key);
  setLocalStorage(key, value);
};

const setDisplayElement = (element, display) => {
  element.style.display = display;
};

const resetElement = (id, attr) => {
  const element = document.querySelector(id);
  element[attr] = ``;
};

const setTextByElement = (arr, text) => {
  arr.forEach((el) => {
    el.textContent = text;
  });
};

export const resetForca = () => {
  const body = [
    ".cabeca",
    ".corpo",
    ".bracoD",
    ".bracoE",
    ".pernaD",
    ".pernaE",
  ];

  body.forEach((el) => {
    const element = document.querySelector(el);
    setDisplayElement(element, "none");
  });
};

export default {
  createElement,
  addEventsButons,
  getLocalStorage,
  setLocalStorage,
  resetLocalStorage,
  setDisplayElement,
  resetElement,
  resetForca,
  setTextByElement,
};
