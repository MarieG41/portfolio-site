const canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const orangeCircle = document.createElement("img");
const lightGreenCircle = document.createElement("img");

orangeCircle.src = "images/Ellipse 6.png";
lightGreenCircle.src = "images/Ellipse 7.png";

let context = canvas.getContext("2d");

const mouseMoveHandle = (event) => {
    const left = event.clientX;
    const top = event.clientY;
    
    context.drawImage(orangeCircle, left, top);
    context.drawImage(lightGreenCircle, left, top);
}

canvas.addEventListener("mousemove", mouseMoveHandle);


let buttonTop = document.getElementById("btn-top");

window.onscroll =function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        buttonTop.style.display = "block";
    } else {
        buttonTop.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}