import {numbersInSpanish} from "./num_spanish.js";
import { numbersInEnglish } from "./num_english.js";
import { numbersInRussian } from "./num_russian.js";

export const state = {
  language: '',
  numbersInLetters: {},
};

export const NUMBERS = {
  es: numbersInSpanish,
  en: numbersInEnglish,
  ru: numbersInRussian, 
}

export const PAGE_TITLE = {
  es: 'Números en Español',
  en: 'Numbers in English',
  ru: 'Цифры на русском языке',
}

export const VALIDATION_BUTTON_TEXT = {
  es: 'Verificar',
  en: 'Verify',
  ru: 'Проверять', 
}

export const TRY_AGAIN_MSG = {
  es: 'siguiente número',
  en: 'next number',
  ru: 'следующий номер',
}

export const INPUT_PLACEHOLDER = {
  es: 'Respuesta',
  en: 'Answer',
  ru: 'отвечать', 
}

// UI elements

export const initialModal = document.querySelector('.language-modal');
export const validationBtn = document.querySelector('.answer_submission button');
const head = document.querySelector('head');
export const title = Array.from(head.children).filter(items => items.tagName === 'TITLE');
export const inputUserAnswer = document.querySelector('.answer_submission input');
