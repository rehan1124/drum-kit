"use strict";

// Locate drum buttons
var drumBtn = document.querySelectorAll(".drum");

// Define function to be executed
function playSound() {
  alert("I am clicked !!!");
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
