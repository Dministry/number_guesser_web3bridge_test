let secretNumber;
let attempts;
const maxAttempts = 10;

function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    attempts = 0; // Reset attempts
    document.getElementById('result').innerText = "New game started! You have 10 attempts.";
    document.getElementById('guessInput').value = ''; // Clear input
}

function makeGuess() {
    const guessedNumber = parseInt(document.getElementById('guessInput').value, 10);
    if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 100) {
        document.getElementById('result').innerText = "Please enter a valid number between 1 and 100.";
        return;
    }

    attempts++; // Increment the attempt counter
    const attemptsLeft = maxAttempts - attempts; // Calculate attempts left

    if (guessedNumber === secretNumber) {
        document.getElementById('result').innerText = `Congratulations! You've guessed the number ${secretNumber} in ${attempts} attempts!`;
    } else if (guessedNumber < secretNumber) {
        document.getElementById('result').innerText = `Too low! You have ${attemptsLeft} attempts left.`;
    } else {
        document.getElementById('result').innerText = `Too high! You have ${attemptsLeft} attempts left.`;
    }

    if (attempts >= maxAttempts) {
        document.getElementById('result').innerText = `Sorry, you've used all your attempts. The secret number was ${secretNumber}.`;
    }
}

//Start the game when the page loads
window.onload = startGame;