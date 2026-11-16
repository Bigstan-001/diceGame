let curr_score = 0;
let main_score = [0, 0];
let playerWho = 0;
const winScore = 100;
const rollDice = document.querySelector(".roll-btn");
const holdDice = document.querySelector(".hold-btn");
const img0 = document.getElementById("img-0");
const img1 = document.getElementById("img-1");
const winnerEl = document.querySelector(".winner");
const winnerTextEl = document.querySelector(".winnerText");
rollDice.addEventListener("click", function () {
  console.log(curr_score, main_score);
  const rand0 = Math.ceil(Math.random() * 6);
  const rand1 = Math.ceil(Math.random() * 6);
  img0.src = `dice-${rand0}.png`;
  img1.src = `dice-${rand1}.png`;
  if (rand0 == rand1) {
    curr_score = 0;
    document.querySelector(`.current-${playerWho}-score`).textContent =
      curr_score;
    return changeControl();
  }
  curr_score += rand0 + rand1;
  document.querySelector(`.current-${playerWho}-score`).textContent =
    curr_score;
});
holdDice.addEventListener("click", function () {
  main_score[playerWho] += curr_score;
  if(curr_score == 0) {
    return
  }
  curr_score = 0;
  document.querySelector(`.current-${playerWho}-score`).textContent =
    curr_score;
  document.querySelector(`.player-${playerWho}-score`).textContent =
    main_score[playerWho];

  //Changing Active Class
  changeControl();
});

function winner(x) {
  winnerEl.classList.remove("hide");
  winnerTextEl.innerHTML =
    x == 0 ? "Player 1 Wins Player 2" : "Player 2 Wins Player 1";
}

function changeControl() {
  document
    .querySelector(`.player-${playerWho}-area`)
    .classList.toggle("active");

  if (main_score[playerWho] >= winScore) {
    return winner(playerWho);
  }
  playerWho = playerWho == 0 ? 1 : 0;
  document
    .querySelector(`.player-${playerWho}-area`)
    .classList.toggle("active");
}
