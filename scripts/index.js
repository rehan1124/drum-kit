"use strict";

// Locate drum buttons
var drumBtn = document.querySelectorAll(".drum");

// Define function to be executed
function playSound() {
  var sound = "";

  // console.log(this.textContent);
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
