"use strict";

// Locate drum buttons
var drumBtn = document.querySelectorAll(".drum");

function playSound(event) {
  var sound = "";
  // console.log(event.key);
  switch (event) {
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

  var audio = new Audio(sound);
  audio.play();
}

// Event listener for button click
for (var i = 0; i < drumBtn.length; i += 1) {
  drumBtn[i].addEventListener("click", function () {
    var button = this.textContent;
    playSound(button);
  });
}

// Event listener for keyboard key press
document.addEventListener("keydown", function (event) {
  playSound(event.key);
});
