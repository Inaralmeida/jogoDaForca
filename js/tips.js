import $ from "./utils.js";

export const createdTips = (tips) => {
  tips.forEach((tip, i) => {
    const elTip = $.createElement("span", tip, "dica", i);
    $.setDisplayElement(elTip, 'none')
    document.querySelector("#containerDicas").appendChild(elTip);
  });
};

export const handleClickTip = (e, id) => {
  e.preventDefault();
  document.querySelectorAll(".dica").forEach((tip, i) => {
    if (i == id) {
      $.setDisplayElement(tip, 'flex')
    }
  });
};
