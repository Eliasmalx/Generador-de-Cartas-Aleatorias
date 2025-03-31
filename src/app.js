import "bootstrap";
import "./style.css";


window.onload = function () {
  let generadorDecarta = () => {

    let cartas = ["♦", "♥", " ♠", "♣"]
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8] // con loops?
  
    let randomCarta = cartas[Math.floor(Math.random() * cartas.length)];
    let randomNum = numeros[Math.floor(Math.random() * numeros.length)];
  
    let logos = document.querySelectorAll(".logo")
    logos[0].innerHTML = randomCarta
    logos[1].innerHTML = randomCarta
    
    if (randomCarta === "♦" || randomCarta === "♥") {
      logos.forEach(logo => logo.style.color = "red");
    } else {
      logos.forEach(logo => logo.style.color = "black");
    }

    document.querySelector(".numero").innerHTML = randomNum
  
  }

  generadorDecarta()

  setInterval(generadorDeCarta, 10000);

  document.getElementById("generate-btn").addEventListener("click", generadorDecarta);

};



