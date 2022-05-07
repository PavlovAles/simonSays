const panel = document.querySelector('.panel');
const startButton = panel.querySelector('.panel__button-start');
const sectors = panel.querySelector('.panel__sector');

function startGame() {
  const consiquence = [];
  hideStartButton();
}

function hideStartButton() {
  startButton.classList.add('panel__button-start_hidden');
  startButton.setAttribute('disabled', '');
}

function showStartButton() {
  startButton.classList.remove('panel__button-start_hidden');
  startButton.removeAttribute('disabled', '');
}

startButton.addEventListener('click', startGame);

