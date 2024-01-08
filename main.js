import "./lang_selection.js"
import { VALIDATION_BUTTON_TEXT, state } from "./global.js";
import { validationBtn } from "./global.js";
import { inputUserAnswer } from "./global.js";
import { TRY_AGAIN_MSG } from "./global.js";

const displayedNumber = document.querySelector('.number-display #number');
const numberInLetter = document.querySelector('.number-display figcaption');
const resultIcon = document.querySelector('.answer_submission #result-icon');

const getRandomNum = function() {
  return Math.floor(Math.random() * 100)
}

let randomNum = getRandomNum();

window.addEventListener('DOMContentLoaded', function() {
  displayedNumber.textContent = randomNum;
})

const rightAnswerEmoji = ['fire', 'party', 'target'];
const wrongAnswerEmoji = ['no', 'thumbs-down']

const getRandomEmoji = function(arr) {
  const length = arr.length;
  const selected = Math.floor(Math.random() * length);
  return `./assets/${arr[selected]}.gif`
}

const runValidResult = function() {
  inputUserAnswer.classList.remove('wrong-answer');
  inputUserAnswer.classList.add('valid-answer');
  resultIcon.src = getRandomEmoji(rightAnswerEmoji);
}

const runInvalidResult = function() {
  inputUserAnswer.classList.add('wrong-answer');
  resultIcon.src = getRandomEmoji(wrongAnswerEmoji);
}

// isFinished describe when the answer is right to then
// allow start again
let isFinished = false;

validationBtn.addEventListener('pointerdown', function() {
  if (!isFinished) {
    const userAnswer = inputUserAnswer.value.trim().toLowerCase();
    const validAnswer = state.numbersInLetters[randomNum];
    numberInLetter.textContent = validAnswer;
    if (userAnswer === validAnswer) {
      runValidResult()
      isFinished = true;
      this.textContent = TRY_AGAIN_MSG[state.language]
    } else {
      runInvalidResult()
    }
    numberInLetter.textContent = validAnswer;
    resultIcon.classList.add('icon-visible')
    return
  } else if (isFinished) {
      randomNum = getRandomNum();
      displayedNumber.textContent = randomNum;

      validationBtn.textContent = VALIDATION_BUTTON_TEXT[state.language];
      numberInLetter.textContent = '';
      inputUserAnswer.value = '';
      inputUserAnswer.classList.remove('wrong-answer');
      inputUserAnswer.classList.remove('valid-answer');
      resultIcon.classList.remove('icon-visible')
      isFinished = false;
  }
})
