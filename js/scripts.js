let numberOfAvailableGuesses = 3
document.getElementById('prompt').innerHTML = numberOfAvailableGuesses
let randomNumber = Math.floor(Math.random() * 100 + 1)
console.log('randomNumber', randomNumber);


let history = []

function getUserInput() {
  let userGuessedNumber = document.getElementById('userGuess').value
  if (userGuessedNumber == '') return false
  document.getElementById('userGuess').value = ''
  userGuessedNumber = parseInt(userGuessedNumber)
  return userGuessedNumber
}

function renderHistory() {
  const historyHTML = history.map(guess => {
    return `<li>${guess}</li>`
  })
  document.getElementById('history').innerHTML = historyHTML.join(', ')
}

function promptUser(userGuessedNumber) {
  let prompt = ''
  if (userGuessedNumber > randomNumber) {
    prompt = `Too High with ${userGuessedNumber}.<br> ${numberOfAvailableGuesses - 1} remaining.`
  } else if (userGuessedNumber < randomNumber) {
    prompt = `Too Low with ${userGuessedNumber}.<br> ${numberOfAvailableGuesses - 1} remaining.`
  } else if (userGuessedNumber == randomNumber) {
    prompt = `You guessed correctly with ${userGuessedNumber}`
  } else {
    prompt = "Please enter a number value"
  }
  
  document.getElementById('prompt').innerHTML = prompt
}

function guessNumber() {
  const userGuessedNumber = getUserInput()
  if (userGuessedNumber === false) return
  if (history.includes(userGuessedNumber)) {
    document.getElementById('prompt').innerHTML = `You've guessed ${userGuessedNumber} already`
    return
  }
  history.push(userGuessedNumber)
  renderHistory()

  promptUser(userGuessedNumber)

  numberOfAvailableGuesses -= 1
  if (numberOfAvailableGuesses === 0) endGame()
}

function endGame() {
  if (numberOfAvailableGuesses === 0) { 
    document.getElementById('prompt').innerHTML = "Out of guesses. You lose =("
    document.getElementById("guessButton").disabled = true;
  }
}

function resetGame() {
  history = []
  numberOfAvailableGuesses = 3
  document.getElementById('userGuess').value = ''
  document.getElementById('history').innerHTML = ''
  randomNumber = Math.floor(Math.random() * 100 + 1)
  document.getElementById("guessButton").disabled = false;
  document.getElementById('prompt').innerHTML = `Remaining guesses ${numberOfAvailableGuesses}`
}