let numberOfAvailableGuesses = 3
const prompt = document.getElementById('prompt')
prompt.innerHTML = numberOfAvailableGuesses
let randomNumber = Math.floor(Math.random() * 100 + 1)
console.log('Random Number:', randomNumber);

let history = []

function getUserInput() {
  const userGuessedNumber = parseInt(document.getElementById('userGuess').value)
  if (userGuessedNumber == '') return false
  document.getElementById('userGuess').value = ''
  return userGuessedNumber
}

function renderHistory() {
  const historyHTML = history.map(guess => `<li>${guess}</li>`)
  document.getElementById('history').innerHTML = historyHTML.join(', ')
}

function promptUser(guess) {
  let text = ''
  if (guess > randomNumber) {
    text = `Too High with ${guess}.<br> ${numberOfAvailableGuesses - 1} remaining.`
  } else if (guess < randomNumber) {
    text = `Too Low with ${guess}.<br> ${numberOfAvailableGuesses - 1} remaining.`
  } else if (guess == randomNumber) {
    text = "You Win!"
  } else {
    text = "Please enter a number value"
  }

  prompt.innerHTML = text
}

function updateGame(guess) {
  history.push(guess)
  renderHistory()
  promptUser(guess)
}

function guessNumber() {
  const guess = getUserInput()
  if (numberOfAvailableGuesses === 0) return
  if (guess === false) return
  if (history.includes(guess)) {
    prompt.innerHTML = `You've guessed ${guess} already`
    return
  }

  updateGame(guess)

  numberOfAvailableGuesses -= 1
  if (numberOfAvailableGuesses === 0) endGame(guess)
}

function endGame(guess) {
  text = guess === randomNumber ? "You Win!" : "Out of guesses. You lose =("
  prompt.innerHTML = text
  document.getElementById("guessButton").disabled = true;
}

function resetGame() {
  history = []
  numberOfAvailableGuesses = 3
  document.getElementById('userGuess').value = ''
  document.getElementById('history').innerHTML = ''
  randomNumber = Math.floor(Math.random() * 100 + 1)
  console.log('New Random Number:', randomNumber);
  document.getElementById("guessButton").disabled = false;
  prompt.innerHTML = `Remaining guesses ${numberOfAvailableGuesses}`
}