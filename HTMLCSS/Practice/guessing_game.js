const number = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let userTurn = true;
let userMin = 1, userMax = 100;
let aiMin = 1, aiMax = 100;

function submitGuess() {
  const guessInput = document.getElementById("guess");
  const guess = parseInt(guessInput.value);
  if (isNaN(guess)) {
    alert("Please enter a valid number.");
    return;
  }
  if (guess < 1 || guess > 100) {
    alert("Please enter a number between 1 and 100.");
    return;
  }
  guessInput.value = "";
  if (userTurn) {
    if (guess == number) {
      document.getElementById("message").textContent = `You win! The number was ${number}. You took ${attempts} attempts.`;
      return;
    } else if (guess < number) {
      document.getElementById("hint").textContent = "Your guess is lower.";
      userMin = guess + 1;
      aiMin = Math.max(aiMin, userMin);
    } else {
      document.getElementById("hint").textContent = "Your guess is higher.";
      userMax = guess - 1;
      aiMax = Math.min(aiMax, userMax);
    }
  } else {
    const aiGuess = Math.floor(Math.random() * (aiMax - aiMin + 1)) + aiMin;
    document.getElementById("hint").textContent = `AI guessed ${aiGuess}`;
    if (aiGuess == number) {
      document.getElementById("message").textContent = `AI wins! The number was ${number}. AI took ${attempts} attempts.`;
      return;
    } else if (aiGuess < number) {
      aiMin = aiGuess + 1;
    } else {
      aiMax = aiGuess - 1;
    }
  }
  userTurn = !userTurn;
  attempts++;
}