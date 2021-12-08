const getOutcomes: any = {
  paper: "Rock",
  rock: "Scissors",
  scissors: "Paper",
};

const windowObject = window as any;
const gameResults = document.querySelector(".game-result");
const playingField = document.querySelector(".playing-field");
const buttonElements = document.querySelectorAll(".btn");
const resultText = document.querySelector(".result-text");
const computerResult = document.querySelector(".computer-result");
const playAgain = document.querySelector(".play-again");
let outcome = "";

const outcomeResult = function (outcome: string, computerChoice: string) {
  gameResults?.classList.add("show");
  resultText!.textContent = `You ${outcome}!`;
  computerResult!.textContent = `Computer chose: ${computerChoice}`;
  gameResults?.addEventListener("animationend", () => {
    if (outcome === "Win") {
      const soundeffect = new Audio("./sound-effects/confetti-pop.wav");
      soundeffect.play();
      // You won!! Confetti time
      var confetti = windowObject.confetti({
        particleCount: 100,
        startVelocity: 60,
        gravity: 0.2,
        spread: 360,
        origin: {
          y: 0.8,
        },
      });
    }
  });
  console.log(outcome, computerChoice);
};

// Get buttons, add onclick event
for (let i = 0; i < buttonElements.length; i++) {
  buttonElements[i].addEventListener("click", function () {
    // Set z-index of playing field to -1 to stop
    // Being able to press buttons
    if (gameResults?.classList.contains("hide"))
      gameResults?.classList.toggle("hide");
    playingField?.classList.toggle("disabled");
    // Get player decision
    const playerchoice = buttonElements[i].id;
    // Get computers decision
    const computerChoice = ["rock", "paper", "scissors"][
      Math.floor(Math.random() * 3)
    ];

    if (computerChoice === playerchoice) {
      outcome = "Draw";
    } else {
      outcome = getOutcomes[playerchoice] === computerChoice ? "Win" : "Lose";
    }
    outcomeResult(outcome, computerChoice);
  });
}

// Play again
playAgain?.addEventListener("click", () => {
  playingField?.classList.toggle("disabled");
  gameResults?.classList.remove("show");
  gameResults?.classList.add("hide");
  outcome = "";
});
