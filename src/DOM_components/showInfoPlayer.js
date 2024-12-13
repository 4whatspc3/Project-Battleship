function showInfoPlayer(counter) {
  const infoPlayer = document.querySelector(`.info-1`);

  switch (counter) {
    case 0 || undefined:
      infoPlayer.textContent = "Place your ships";

      setTimeout(() => {
        infoPlayer.textContent = "Place your Carrier, it takes 5 squares";
      }, 3000);
      break;
    case 1:
      setTimeout(() => {
        infoPlayer.textContent = "Place your Battleship, it takes 4 squares";
      }, 1000);
      break;
    case 2:
      setTimeout(() => {
        infoPlayer.textContent = "Place your Cruiser, it takes 3 squares";
      }, 1000);
      break;
    case 3:
      setTimeout(() => {
        infoPlayer.textContent = "Place your Submarine, it takes 3 squares";
      }, 1000);
      break;
    case 4:
      setTimeout(() => {
        infoPlayer.textContent = "Place your Patrol Boat, it takes 2 squares";
      }, 1000);
      break;
    default:
      console.log(counter);
  }

  setInterval(function () {
    infoPlayer.style.color = infoPlayer.style.color == "red" ? "blue" : "red";
  }, 1000);
}

export default showInfoPlayer;
