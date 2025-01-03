const btnDirection = () => {
  const directionContainer = document.querySelector(".info-playerOne");

  const button = document.createElement("button");

  button.className = "horizontal";

  button.textContent = "Horizontal";

  directionContainer.append(button);

  button.addEventListener("click", () => {
    if (button.className === "horizontal") {
      button.className = "vertical";
      button.textContent = "Vertical";
    } else {
      button.className = "horizontal";
      button.textContent = "Horizontal";
    }
  });
};

export default btnDirection;
