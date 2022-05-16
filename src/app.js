/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  let generateRandomNumber = () => {
    let number = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let indexNumber = Math.floor(Math.random() * number.length);
    console.log(indexNumber);
    return number[indexNumber];
  };

  let randomPinta = generateRandomPinta();
  document.querySelector(".top-suit").textContent = randomPinta;
  document.querySelector(".bottom-suit").textContent = randomPinta;
  document.querySelector(".bottom-suit").classList.add("boca-arriba");

  document.querySelector(".number").innerHTML = generateRandomNumber();

  function generateRandomPinta() {
    let Pinta = ["♦", "♥", "♣", "♠"];
    let indexPinta = Math.floor(Math.random() * Pinta.length);
    return Pinta[indexPinta];
  }

  // identificar diamante y corazon
  if (randomPinta == "♦" || randomPinta == "♥") {
    document.querySelector(".top-suit").style.color = "red";
    document.querySelector(".bottom-suit").style.color = "red";
    document.querySelector(".number").style.color = "red";
  }

  // si es uno de ellos, transformar esa seleccción y su número a rojo
};
