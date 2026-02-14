//Selecting elements
const playerOne = document.querySelector("#player--1");
const playerTwo = document.querySelector("#player--2");
const playerOneName = document.querySelector(".name--1");
const playerTwoName = document.querySelector(".name--2");
const playerOneTotal = document.querySelector("#player_1--total");
const playerTwoTotal = document.querySelector("#player_2--total");
const dice = document.querySelector(".dice");
const rollDiceBtn = document.querySelector(".rollDice");
const newGameBtn = document.querySelector(".newGame");
const holdBtn = document.querySelector(".hold");
const cheersSound = new Audio("./cheers.mp3");
const currentScoreLost = new Audio("./lost.mp3");
const clapSound = new Audio("./clap.mp3");
const diceRollSound = new Audio("./dice_roll.mp3");

//Initial conditions
let currentScore = 0;
let activePlayer = 1;
let playerOneScore = 0;
let playerTwoScore = 0;
//Switch player
const switchPlayer = () => {
  //Current score zero
  document.querySelector(`.current_score--${activePlayer}`).textContent = 0;
  //Switching player and set
  activePlayer = activePlayer === 1 ? 2 : 1;
  currentScore = 0;
  activePlayer !== 1 ? playerOne.classList.add("bg-[#ad6d8c]") : "";
  playerOne.classList.toggle("bg-[#d4a5b2]");
  playerTwo.classList.toggle("bg-[#d4a5b2]");
};
//Cheers function
const cheers = () => {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
  });
  activePlayer = 1;
  rollDiceBtn.disabled = true;
  holdBtn.disabled = true;
};
//Event handler
rollDiceBtn.addEventListener("click", () => {
  const rollDice = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove("hidden");
  dice.src = `./dice-${rollDice}.png`;

  if (rollDice !== 1) {
    currentScore += rollDice;
    document.querySelector(`.current_score--${activePlayer}`).textContent =
      currentScore;
    diceRollSound.play();
  } else {
    switchPlayer();
    currentScoreLost.play();
  }
});

holdBtn.addEventListener("click", () => {
  //Sum of current score and total score and set it to active player:
  activePlayer === 1
    ? (playerOneTotal.textContent = playerOneScore += currentScore)
    : (playerTwoTotal.textContent = playerTwoScore += currentScore);
  clapSound.play();
  //Calling switch player function
  switchPlayer();
  //Winning condition for player-1
  if (playerOneScore >= 100 && playerOneScore > playerTwoScore) {
    playerOneName.textContent = "Player - 1 win!";
    playerOneName.classList.add("bg-amber-300");
    playerOneName.classList.add("py-3");
    playerOneName.classList.add("rounded-lg");
    playerOneScore = 0;
    // cheers();
    cheersSound.play();
    clapSound.play();
  }
  //Winning condition for player-2
  if (playerTwoScore >= 100 && playerTwoScore > playerOneScore) {
    playerTwoName.textContent = "Player - 2 win!";
    playerTwoName.classList.add("bg-amber-300");
    playerTwoName.classList.add("py-3");
    playerTwoName.classList.add("rounded-lg");
    playerTwoScore = 0;
    // cheers();
    cheersSound.play();
    clapSound.play();
  }
});

newGameBtn.addEventListener("click", () => {
  playerOneScore = 0;
  playerTwoScore = 0;
  dice.classList.add("hidden");
  document.querySelector(`.current_score--${activePlayer}`).textContent = 0;
  playerOneTotal.textContent = 0;
  playerTwoTotal.textContent = 0;
  //Player 1
  playerOneName.textContent = "PLAYER 1";
  playerOneName.classList.remove("bg-amber-300");
  playerOneName.classList.remove("py-3");
  playerOneName.classList.remove("rounded-lg");
  // Player-2
  playerTwoName.textContent = "PLAYER 2";
  playerTwoName.classList.remove("bg-amber-300");
  playerTwoName.classList.remove("py-3");
  playerTwoName.classList.remove("rounded-lg");
  rollDiceBtn.disabled = false;
  holdBtn.disabled = false;
});

// //Select elements
// const playerOne = document.getElementById("player--1");
// const playerTwo = document.getElementById("player--2");
// const currentScorePOne = document.querySelector(".current_score--1");
// const currentScorePTwo = document.querySelector(".current_score--2");
// const rollDiceBtn = document.querySelector(".rollDice");
// const dice = document.querySelector(".dice");

// //Initial values:
// let currentScore = 0;
// let activePlayer = 1;
// //Event handling
// rollDiceBtn.addEventListener("click", () => {
//   //Removing hidden class and open dice
//   dice.classList.remove("hidden");
//   //Random number generating to get 1-6 for dice
//   const rollDice = Math.trunc(Math.random() * 6) + 1;
//   dice.src = `./dice-${rollDice}.png`;

//   // Add current score and switch player
//   if (rollDice !== 1) {
//     //Add current score in active player
//     document.querySelector(`.current_score--${activePlayer}`).textContent =
//       currentScore += rollDice;
//   } else {
//     //Set current score zero to previous player
//     document.querySelector(`.current_score--${activePlayer}`).textContent = 0;
//     //Decide active player and set current score to zero
//     activePlayer = activePlayer === 1 ? 2 : 1;
//     currentScore = 0;

//     // Changing color when active player is switched
//     playerOne.classList.toggle("bg-[#d4a5b2]");
//     playerTwo.classList.toggle("bg-[#d4a5b2]");
//     activePlayer !== 1 ? playerOne.classList.add("bg-[#ad6d8c]") : "";
//   }
// });
