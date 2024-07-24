// Toglogciin eeljig hadgalah huvsagch, negdvger toglogch 0, hoyrdugaar toglogch 1,
var activePlayer = 1;

// Toglogchiin tsugluulsan onoog hadgalsan huvisagch
var scores = [0, 0];

// Toglogchiin eeljinde tsugluulj baiga onoog hadgalah var
var roundScore = 0;

// Shooni ali talaara buusniig hadgalah var 1-6 gsen utgiig randomoor vvsgej ognoo.

// Program ehlehed beltgey
document.getElementById("score-0").innerHTML = 0;
document.getElementById("score-1").innerHTML = 0;

document.getElementById("current-0").innerHTML = 0;
document.getElementById("current-1").innerHTML = 0;

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
