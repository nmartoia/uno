function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }  
const plateau = document.querySelector(".plateau");
const pioche = document.querySelector(".pioche");

let cart = [{valeur:0,couleur:"red"},{valeur:1,couleur:"red"},{valeur:2,couleur:"red"},{valeur:3,couleur:"red"},{valeur:4,couleur:"red"},{valeur:5,couleur:"red"},{valeur:6,couleur:"red"},{valeur:7,couleur:"red"},{valeur:8,couleur:"red"},{valeur:9,couleur:"red"},{valeur:0,couleur:"blue"},{valeur:1,couleur:"blue"},{valeur:2,couleur:"blue"},{valeur:3,couleur:"blue"},{valeur:4,couleur:"blue"},{valeur:5,couleur:"blue"},{valeur:6,couleur:"blue"},{valeur:7,couleur:"blue"},{valeur:8,couleur:"blue"},{valeur:9,couleur:"blue"},{valeur:0,couleur:"yellow"},{valeur:1,couleur:"yellow"},{valeur:2,couleur:"yellow"},{valeur:3,couleur:"yellow"},{valeur:4,couleur:"yellow"},{valeur:5,couleur:"yellow"},{valeur:6,couleur:"yellow"},{valeur:7,couleur:"yellow"},{valeur:8,couleur:"yellow"},{valeur:9,couleur:"yellow"},{valeur:0,couleur:"green"},{valeur:1,couleur:"green"},{valeur:2,couleur:"green"},{valeur:3,couleur:"green"},{valeur:4,couleur:"green"},{valeur:5,couleur:"green"},{valeur:6,couleur:"green"},{valeur:7,couleur:"green"},{valeur:8,couleur:"green"},{valeur:9,couleur:"green"}]

pioche.addEventListener("click",()=>{
    console.log(cart[getRandomInt(39)])
})