//Selecting elements
const playerOne = document.querySelector("#player--0");
const playerTwo = document.querySelector("#player--1");
const scorePlayerOne = document.querySelector(".current_score--0");
const scorePlayerTwo = document.querySelector(".current_score--1");
const playerOneTotal = document.querySelector("#player_0--total");
const playerTwoTotal = document.querySelector("#player_1--total");
const dice = document.querySelector(".dice");
const rollDiceBtn = document.querySelector(".rollDice");
const newGameBtn = document.querySelector(".newGame");
const holdBtn = document.querySelector(".hold");

//Initial conditions
playerOneTotal.textContent = 0;
playerTwoTotal.textContent = 0;
let currentScore = 0;
console.log(currentScore);
let activePlayer = 0;
let TotalScore = 0;

//Event handler
rollDiceBtn.addEventListener("click", () => {
  const rollDice = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove("hidden");
  dice.src = `./dice-${rollDice}.png`;

  if (rollDice !== 1) {
    currentScore += rollDice;
    document.querySelector(`.current_score--${activePlayer}`).textContent =
      currentScore;
    console.log(currentScore);
  } else {
    document.querySelector(`.current_score--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    // document.getElementById(`player--${activePlayer}`).style.backgroundColor =
    //   "#ad6d8c";
  }
});
newGameBtn.addEventListener("click", () => {
  dice.classList.add("hidden");
});
holdBtn.addEventListener("click", () => {
  console.log("button clicked");
  TotalScore += currentScore;
});
