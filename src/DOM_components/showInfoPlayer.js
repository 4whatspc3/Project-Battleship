function showInfoPlayer(num) {
  const infoPlayer = document.querySelector(`.info-${num}`);

  infoPlayer.textContent = "Place your ships";

  setInterval(function () {
    infoPlayer.style.color = infoPlayer.style.color == "red" ? "blue" : "red";
  }, 1000);
}

export default showInfoPlayer;
