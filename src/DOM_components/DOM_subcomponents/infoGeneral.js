function infoGeneral(num) {
  const infoGeneral = document.querySelector(`.info-general p`);

  if (num === 1) {
    infoGeneral.textContent = "Player 1 Won!";
  }

  if (num === 2) {
    infoGeneral.textContent = "Player 2 Won!";
  }
}

export default infoGeneral;
