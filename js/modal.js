const modalEl = document.querySelector("#modal");
const modalStart = document.querySelector(".modal-content-start");
const modalwin = document.querySelector(".modal-content-win");

export const closeModal = () => {
  modalEl.style.display = "none";
  modalStart.style.display = "none";
  modalwin.style.display = "none";
};

export const openModal = () => {
  modalEl.style.display = "flex";
  modalStart.style.display = "flex";
};

export const modalWin = () => {
  modalEl.style.display = "flex";
  modalwin.style.display = "flex";
};
