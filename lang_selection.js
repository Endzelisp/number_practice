const settingsWrapper = document.querySelector('.settings-wrapper');
const settingsBtn = document.querySelector('#settings-button');
const settingsBtnIcon = settingsBtn.querySelector('img');
let isMenuOpen = false;

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