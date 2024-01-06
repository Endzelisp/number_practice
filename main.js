import {numbersInSpanish} from "./num_spanish.js";
import { numbersInEnglish } from "./num_english.js";
import { numbersInRussian } from "./num_russian.js";

/*

  Open the modal to select the language

*/
const modal = document.querySelector('.language-modal');
modal.showModal();

let language = '';

const PAGE_TITLE = {
  es: 'Números en Español',
  en: 'Numbers in English',
  ru: 'Цифры на русском языке',
}

const head = document.querySelector('head');
const title = Array.from(head.children).filter(items => items.tagName === 'TITLE');
title[0].textContent = PAGE_TITLE.en;

const NUMBERS = {
  es: numbersInSpanish,
  en: numbersInEnglish,
  ru: numbersInRussian, 
}

let numbersInLetters;

modal.addEventListener('close', () => {
  language = modal.returnValue;
  numbersInLetters = NUMBERS[language];
  title[0].textContent = PAGE_TITLE[language];
})

const displayedNumber = document.querySelector('.number-display #number');
const numberInLetter = document.querySelector('.number-display figcaption');
const inputUserAnswer = document.querySelector('.answer_submission input');
const validationBtn = document.querySelector('.answer_submission button');
const resultIcon = document.querySelector('.answer_submission #result-icon');

validationBtn.textContent = 'Verificar';

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
    const validAnswer = numbersInLetters[randomNum];
    numberInLetter.textContent = validAnswer;
    if (userAnswer === validAnswer) {
      runValidResult()
      isFinished = true;
      this.textContent = 'otra vez'
    } else {
      runInvalidResult()
    }
    numberInLetter.textContent = validAnswer;
    resultIcon.classList.add('icon-visible')
    return
  } else if (isFinished) {
      randomNum = getRandomNum();
      displayedNumber.textContent = randomNum;

      validationBtn.textContent = 'Verificar';
      numberInLetter.textContent = '';
      inputUserAnswer.value = '';
      inputUserAnswer.classList.remove('wrong-answer');
      inputUserAnswer.classList.remove('valid-answer');
      resultIcon.classList.remove('icon-visible')
      isFinished = false;
  }
})
