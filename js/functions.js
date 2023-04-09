export const createButtonsLetras = (id, letras) => {
  letras.forEach((letra) => {
    const letraEl = document.createElement('button');
    letraEl.textContent= letra
    letraEl.classList.add('btn-letra')
    id.appendChild(letraEl)
  });
};
