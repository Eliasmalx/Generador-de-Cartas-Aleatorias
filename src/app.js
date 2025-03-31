import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let generadorDecarta = () => {

    let cartas = ["♦", " ♥", " ♠", "♣"]
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8] // con loops?
  
    let randomCarta = cartas[Math.floor(Math.random() * cartas.length)];
    let randomNum = numeros[Math.floor(Math.random() * numeros.length)];
  
    let logos = document.querySelectorAll(".logo")
    logos[0].innerHTML = randomCarta
    logos[1].innerHTML = randomCarta
    
    if( logos === "♦" || logos === "♥" ){
      logos.style.color = 'red';
    }

    let resultadoNum = document.querySelector(".numero").innerHTML = randomNum
  
  }

  generadorDecarta()

  document.getElementById("generate-btn").addEventListener("click", generadorDecarta);
};


