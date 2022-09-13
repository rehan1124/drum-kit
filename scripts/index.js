"use strict";

// Locate drum buttons
var drumBtn = document.querySelectorAll(".drum");

// Define function to be executed
function playSound() {
  var sound = "";

  // console.log(this.textContent);
  // Instead of if - else if - else, used switch
  switch (this.textContent) {
    case "w":
      sound = "../sounds/crash.mp3";
      break;
    case "a":
      sound = "../sounds/kick-bass.mp3";
      break;
    case "s":
      sound = "../sounds/snare.mp3";
      break;
    case "d":
      sound = "../sounds/tom-1.mp3";
      break;
    case "j":
      sound = "../sounds/tom-2.mp3";
      break;
    case "k":
      sound = "../sounds/tom-3.mp3";
      break;
    case "l":
      sound = "../sounds/tom-4.mp3";
      break;
    default:
      console.log("Press buton shown on screen !!!");
  }

  /*
  if (this.textContent === "w") {
    sound = "../sounds/crash.mp3";
  } else if (this.textContent === "a") {
    sound = "../sounds/kick-bass.mp3";
  } else if (this.textContent === "s") {
    sound = "../sounds/snare.mp3";
  } else if (this.textContent === "d") {
    sound = "../sounds/tom-1.mp3";
  } else if (this.textContent === "j") {
    sound = "../sounds/tom-2.mp3";
  } else if (this.textContent === "k") {
    sound = "../sounds/tom-3.mp3";
  } else if (this.textContent === "l") {
    sound = "../sounds/tom-4.mp3";
  }
  */

  var audio = new Audio(sound);
  audio.play();
  this.style.color = "white";
}

/*
//OR
// Equivalent anonymous function will be
function () {
    alert("I am clicked !!!");
  }
*/

// Event listeners
for (var i = 0; i < drumBtn.length; i += 1) {
  drumBtn[i].addEventListener("click", playSound);
}
