let numberOfAvailableGuesses = 5
let generatedRandomNumber = Math.floor(Math.random() * 100) + 1

console.log('generatedRandomNumber', generatedRandomNumber)


function guessNumber() {
  if (numberOfAvailableGuesses === 0) {
    document.getElementById('userPrompt').innerHTML = `Game Over!`
    return
  }

  const guess = parseInt(document.getElementById('guess').value)
  document.getElementById('guessPrompt').style.visibility = 'visible'
  document.getElementById('resetGameButton').style.visibility = 'visible'

  if (guess < generatedRandomNumber) {
    document.getElementById('guessPrompt').innerHTML = 'Too Low!'
    document.getElementById('guessPrompt').classList.add('alert-danger')
    document.getElementById('userPrompt').innerHTML = `<span style='color: red; font-size: 35px'>${guess}</span> is low`
  }

  if (guess > generatedRandomNumber) {
    document.getElementById('guessPrompt').innerHTML = 'Too High!'
    document.getElementById('guessPrompt').classList.add('alert-danger')
    document.getElementById('userPrompt').innerHTML = `<span style='color: red; font-size: 35px'>${guess}</span> is high`
  }

  if (guess === generatedRandomNumber) {
    document.getElementById('userPrompt').style.color = 'black'
    document.getElementById('userPrompt').innerHTML = `Your guess of <span style='color: green'>${guess}</span> is correct!`
    document.getElementById('guessPrompt').classList.add('alert-success')
    document.getElementById('guessPrompt').classList.remove('alert-danger')
    document.getElementById('resetGameButton').style.visibility = 'hidden'
    document.getElementById('guessPrompt').innerHTML = 'Correct guess!'
    document.getElementById('numberOfRemainingGuesses').innerHTML = 5
    numberOfAvailableGuesses = 5
    document.getElementById('guess').value = ''
    generatedRandomNumber = Math.floor(Math.random() * 100) + 1
    console.log('generatedRandomNumber', generatedRandomNumber)
    return
  }

  document.getElementById('guess').value = ''
  numberOfAvailableGuesses -= 1

  document.getElementById('numberOfRemainingGuesses').innerHTML = numberOfAvailableGuesses

  if (numberOfAvailableGuesses === 0) {
    document.getElementById('userPrompt').innerHTML = `Game Over!`
    return
  }
}

function resetGame() {
  generatedRandomNumber = Math.floor(Math.random() * 100) + 1
  document.getElementById('resetGameButton').style.visibility = 'hidden'
  document.getElementById('guessPrompt').style.visibility = 'hidden'
  document.getElementById('numberOfRemainingGuesses').innerHTML = 5
  document.getElementById('userPrompt').innerHTML = `New Game`
  numberOfAvailableGuesses = 5
}
