const numbersInLetters = [
  "cero",
  "uno",
  "dos",
  "tres",
  "cuatro",
  "cinco",
  "seis",
  "siete",
  "ocho",
  "nueve",
  "diez",
  "once",
  "doce",
  "trece",
  "catorce",
  "quince",
  "dieciséis",
  "diecisiete",
  "dieciocho",
  "diecinueve",
  "veinte",
  "veintiuno",
  "veintidós",
  "veintitrés",
  "veinticuatro",
  "veinticinco",
  "veintiséis",
  "veintisiete",
  "veintiocho",
  "veintinueve",
  "treinta",
  "treinta y uno",
  "treinta y dos",
  "treinta y tres",
  "treinta y cuatro",
  "treinta y cinco",
  "treinta y seis",
  "treinta y siete",
  "treinta y ocho",
  "treinta y nueve",
  "cuarenta",
  "cuarenta y uno",
  "cuarenta y dos",
  "cuarenta y tres",
  "cuarenta y cuatro",
  "cuarenta y cinco",
  "cuarenta y seis",
  "cuarenta y siete",
  "cuarenta y ocho",
  "cuarenta y nueve",
  "cincuenta",
  "cincuenta y uno",
  "cincuenta y dos",
  "cincuenta y tres",
  "cincuenta y cuatro",
  "cincuenta y cinco",
  "cincuenta y seis",
  "cincuenta y siete",
  "cincuenta y ocho",
  "cincuenta y nueve",
  "sesenta",
  "sesenta y uno",
  "sesenta y dos",
  "sesenta y tres",
  "sesenta y cuatro",
  "sesenta y cinco",
  "sesenta y seis",
  "sesenta y siete",
  "sesenta y ocho",
  "sesenta y nueve",
  "setenta",
  "setenta y uno",
  "setenta y dos",
  "setenta y tres",
  "setenta y cuatro",
  "setenta y cinco",
  "setenta y seis",
  "setenta y siete",
  "setenta y ocho",
  "setenta y nueve",
  "ochenta",
  "ochenta y uno",
  "ochenta y dos",
  "ochenta y tres",
  "ochenta y cuatro",
  "ochenta y cinco",
  "ochenta y seis",
  "ochenta y siete",
  "ochenta y ocho",
  "ochenta y nueve",
  "noventa",
  "noventa y uno",
  "noventa y dos",
  "noventa y tres",
  "noventa y cuatro",
  "noventa y cinco",
  "noventa y seis",
  "noventa y siete",
  "noventa y ocho",
  "noventa y nueve",
  "cien"
];

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
