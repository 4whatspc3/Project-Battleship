import "./style.css";

import Icon from "./icon.png";

import printMe from "./print.js";

function component() {
  const element = document.createElement("div");

  element.textContent = "hi";
  element.classList.add("hello");

  const btn = document.createElement("button");
  btn.textContent = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

function imgComponent() {
  const container = document.createElement("div");
  container.classList.add("hello");

  const myIcon = new Image();
  myIcon.src = Icon;

  container.appendChild(myIcon);

  return container;
}

const hello = () => console.log("hello world!");

hello();

document.body.append(component(), imgComponent());
