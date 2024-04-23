window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

let i = 0;
//let txt = 'Extreme Performance'; /* The text */
let speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter(txt, i = 0, speed = 100) {  // Default values for i and speed
  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(() => typeWriter(txt, i, speed), speed);  // Pass all variables needed
  }
}

function clear(){
  document.getElementById("type").innerHTML = "";
}



function showRange() {
  clear()
  typeWriter('Longest Range')

 
}

function showDesign() {
  clear()
  typeWriter('Timeless Design')


}

function showFuture() {
  clear()
  typeWriter('Experience the Future')


}


typeWriter('Extreme Performance'); 

setTimeout(showRange, 3000);

setTimeout(showDesign, 6000);

setTimeout(showFuture, 9000);



let opacity = 0; 
let intervalID = 0; 
 

function fadeIn() { 
    setInterval(show, 200); 
} 

function show() { 
    var body = document.getElementById("fade"); 
    opacity = Number(window.getComputedStyle(body) 
                    .getPropertyValue("opacity")); 
    if (opacity < 1) { 
        opacity = opacity + 0.1; 
        body.style.opacity = opacity 
    } else { 
        clearInterval(intervalID); 
    } 
} 

setTimeout(fadeIn, 12000);
