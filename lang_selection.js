import { initialModal } from "./global.js";
import { state } from "./global.js";
import { NUMBERS } from "./global.js";
import { PAGE_TITLE } from "./global.js";
import { VALIDATION_BUTTON_TEXT } from "./global.js";
import { INPUT_PLACEHOLDER } from "./global.js";
import { validationBtn } from "./global.js";
import { title } from "./global.js";
import { inputUserAnswer } from "./global.js";
import { resetDisplayedNumb } from "./main.js";

const settingsWrapper = document.querySelector('.settings-wrapper');
const settingsBtn = document.querySelector('#settings-button');
const settingsBtnIcon = settingsBtn.querySelector('img');
const sideBarMenu = settingsWrapper.querySelector('nav.settings-menu');
let isMenuOpen = false;

/*

  Open the modal to select the language

*/

initialModal.showModal();

const languageSelection = function(lang) {
  state.language = lang;
  state.numbersInLetters = NUMBERS[state.language];
  title[0].textContent = PAGE_TITLE[state.language];
  validationBtn.textContent = VALIDATION_BUTTON_TEXT[state.language];
  inputUserAnswer.setAttribute('placeholder', INPUT_PLACEHOLDER[state.language])
}

initialModal.addEventListener('close', () => {
  languageSelection(initialModal.returnValue);
})

title[0].textContent = 'Practice the numbers';

settingsBtn.addEventListener('click', function() {
  if (!isMenuOpen) {
    settingsWrapper.style.marginLeft = 0;
    isMenuOpen = true;
    settingsBtnIcon.setAttribute('src', `./assets/close_menu.png`);
    return;
  }
  settingsWrapper.style.marginLeft = '';
  isMenuOpen = false;
  settingsBtnIcon.setAttribute('src', `./assets/open_menu.png`);
  return;
})

sideBarMenu.addEventListener('click', function(e) {
  const langButton = e.target.closest('button[data-lang]');
  languageSelection(langButton.dataset.lang)
  resetDisplayedNumb()
})
