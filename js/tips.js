import { removePoints, setPoints } from "./points.js";
import $ from "./utils.js";
import doc from "./elementos.js";

const { categoria } = doc.containers;

const btnDica = document.querySelectorAll(".btnDica");

export const createdTips = (tips) => {
  tips.forEach((tip, i) => {
    const elTip = $.createElement("span", tip, "dica", i);
    $.setDisplayElement(elTip, "none");
    document.querySelector("#containerDicas").appendChild(elTip);
  });
};

export const handleClickTip = (e, id, btn) => {
  e.preventDefault();
  const tipsEnabled = $.getLocalStorage("tipsEnabled");
  document.querySelectorAll(".dica").forEach((tip, i) => {
    if (i == id && tipsEnabled.indexOf(id + 1) == -1) {
      removePoints();
      $.setDisplayElement(tip, "flex");
      $.setLocalStorage("tipsEnabled", [...tipsEnabled, i + 1]);
      updatedTips();
    }
  });
};

const enabledTip = (btn, id) => {
  const tipsEnabled = $.getLocalStorage("tipsEnabled");
  const idTip = id + 1;
  const valueTip = idTip * 10;
  const points = $.getLocalStorage("points");

  if (tipsEnabled.indexOf(id + 1) > -1) {
    btn.disabled = true;
  } else {
    btn.disabled = !(points >= valueTip);
  }
};

export const updatedTips = (tip) => {
  btnDica.forEach((btn, i) => {
    enabledTip(btn, i);
  });
};

export const firstTip = (dica) => {
  categoria.textContent = ` `;
  const tip = $.createElement("span", dica, "dicaCategoria", "dicaCategoria");
  categoria.appendChild(tip);
};
