// Toglogciin eeljig hadgalah huvsagch, negdvger toglogch 0, hoyrdugaar toglogch 1,
var activePlayer;
var scores;
var roundScore;
//Togloom duussan esehig hadgalah toloviin huvisagch
var isNewGame;
//SHoonii zurgiig vzvvleh elementiig DOMoos haij olood end hadglana.
var diceDom = document.querySelector(".dice");

initGame();

function initGame() {
  //Togloom ehelle gedeg tolovt oruulla
  isNewGame = true;
  activePlayer = 0;
  scores = [0, 0];
  roundScore = 0;
  document.getElementById("score-0").innerHTML = 0;
  document.getElementById("score-1").innerHTML = 0;

  document.getElementById("current-0").innerHTML = 0;
  document.getElementById("current-1").innerHTML = 0;

  document.getElementById("name-0").innerHTML = "Player 0";
  document.getElementById("name-1").innerHTML = "Player 1";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");
  diceDom.style.display = "none";
}

// Shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame) {
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
  } else {
    alert("Togloom duussan baina..");
  }
});

// HOLD tovchnii event Listener
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
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
    if (scores[activePlayer] >= 100) {
      isNewGame = false;
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
  } else {
    alert("Togloom duussan baina..");
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
document.querySelector(".btn-new").addEventListener("click", initGame);
