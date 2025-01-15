
// Elements
const playerChoiceDisplay = document.getElementById("player-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("result");
const playAgainButton = document.getElementById("play-again");
const choiceButtons = document.querySelectorAll(".choices button");
const winsDisplay = document.getElementById("wins");
const lossesDisplay = document.getElementById("losses");
const tiesDisplay = document.getElementById("ties");

// Game Choices and Messages
const choices = ["rock", "paper", "scissors"];
const emojis = {
  rock: "🪨",
  paper: "📄",
  scissors: "✂️"
};
const resultMessages = {
  win: "🎉 You win! Great job!",
  lose: "💀 You lost! Try again!",
  tie: "😐 It's a tie!"
};

// Score Tracking
let wins = 0;
let losses = 0;
let ties = 0;

// Event Listener for Choices
choiceButtons.forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.dataset.choice;
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    displayChoices(playerChoice, computerChoice);
    updateResult(playerChoice, computerChoice);
    updateScoreDisplay();
    playAgainButton.classList.remove("hidden");
  });
});

// Display Choices
function displayChoices(playerChoice, computerChoice) {
  playerChoiceDisplay.textContent = `You: ${emojis[playerChoice]} ${capitalize(playerChoice)}`;
  computerChoiceDisplay.textContent = `Computer: ${emojis[computerChoice]} ${capitalize(computerChoice)}`;
}

// Determine and Update Result
function updateResult(player, computer) {
  if (player === computer) {
    resultDisplay.textContent = resultMessages.tie;
    ties++;
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    resultDisplay.textContent = resultMessages.win;
    wins++;
  } else {
    resultDisplay.textContent = resultMessages.lose;
    losses++;
  }
}

// Update Score Display
function updateScoreDisplay() {
  winsDisplay.textContent = wins;
  lossesDisplay.textContent = losses;
  tiesDisplay.textContent = ties;
}

// Capitalize Helper
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Reset Game
playAgainButton.addEventListener("click", () => {
  playerChoiceDisplay.textContent = "You: 🤔";
  computerChoiceDisplay.textContent = "Computer: 🤔";
  resultDisplay.textContent = "";
  playAgainButton.classList.add("hidden");
});
