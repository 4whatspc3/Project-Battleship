import showInfo from "./DOM_subcomponents/showInfo";

const pressReset = () => {
  const reset = document.querySelector(".reset");

  const start = document.querySelector(".start");

  const infoGeneral = document.querySelector(".info-general p");

  reset.addEventListener("click", () => {
    infoGeneral.textContent = "Welcome to classic battleship";

    const infoPlayer = document.querySelector(`.info-1`);
    infoPlayer.remove();

    start.disabled = false;

    reset.disabled = true;

    const btnDirection = document.querySelector(".horizontal");
    btnDirection.remove();

    const cleanGrid = document.querySelectorAll(`[data-x]`);
    cleanGrid.forEach((column) => column.remove());

    const borders = document.querySelectorAll(".bigBorder");
    borders.forEach((board) => board.classList.remove("bigBorder"));
  });
};

export default pressReset;
