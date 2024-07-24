// Toglogciin eeljig hadgalah huvsagch, negdvger toglogch 0, hoyrdugaar toglogch 1,
var activePlayer = 0;

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

// Shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1-6 hvrtelh sanamsargu neg toog gargaj avna.
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  // Shoonii zurgiig web deer gargaj irne.
  diceDom.style.display = "block";

  // Buusan sanamsargu toond hargalzah shooni zurgiig web deer gargaj irne.
  diceDom.src = "dice-" + diceNumber + ".png";

  // Buusan too ni 1-ees yalgaatai bol idevhitei toglogchin eeljiin onoog nemegdvvne.
  if (diceNumber !== 1) {
    //1-ees ylgaatai too buula.Buusan toog toglogchid nemj ogno.
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).innerHTML = roundScore;
  } else {
    //1 buusan tul toglogchiin eeljiig ene hesegt solij ogno.
    switchToNextPlayer();
  }
});

// HOLD tovchnii event Listener
document.querySelector(".btn-hold").addEventListener("click", function () {
  //ug toglogchin tsugluulsan onoog global onoon deer nemj ogno.
  //   if(activePlayer === 0 ){
  //     scores[0] = scores[0] + roundScore;
  //   }else{
  //     scores[1] = scores[1] + roundScore;
  //   }
  scores[activePlayer] = scores[activePlayer] + roundScore;
  //Delgets deer onoog ni oorcloh
  document.getElementById("score-" + activePlayer).innerHTML =
    scores[activePlayer];
  //Ug toglogch hojison esehiig shalgah
  if (scores[activePlayer] >= 20) {
    document.getElementById("name-" + activePlayer).innerHTML = "WINNER!!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
  } else {
    //eeljiin onoog ni 0 bolgono.
    switchToNextPlayer();
  }
});

function switchToNextPlayer() {
  roundScore = 0;
  document.getElementById("current-" + activePlayer).innerHTML = 0;

  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  //Улаан цэгийг шилжүүлэх
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  //Shoog tvr alga bolgoh
  diceDom.style.display = "none";
}

//shien togloom ehlvvleh tovchnii listener
dosumern;
