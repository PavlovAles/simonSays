const panel = document.querySelector('.panel');
const startButton = panel.querySelector('.panel__button-start');
const sectors = panel.querySelectorAll('.panel__sector');

function startGame() {
  hideStartButton();
  const consiquence = [];
  increaseConsiquence(consiquence);
  showConsiquence(consiquence);
}

function hideStartButton() {
  startButton.classList.add('panel__button-start_hidden');
  startButton.setAttribute('disabled', '');
}

function showStartButton() {
  startButton.classList.remove('panel__button-start_hidden');
  startButton.removeAttribute('disabled', '');
}

function increaseConsiquence(consiquence) {
  const randomSector = Math.floor(Math.random() * 4);
  consiquence.push(randomSector);
}

function showConsiquence(consiquence) {
  for (let i = 0; i < consiquence.length; i++) {
    setTimeout(function timer() {
      blinkSector(consiquence[i]);
    }, i * 1000);
  }
}

function blinkSector(sectorNumber) {
  setTimeout(function() {
    sectors[sectorNumber].classList.add('panel__sector_blink');
    setTimeout(() => sectors[sectorNumber].classList.remove('panel__sector_blink'), 500)
  }, 1000)
}

startButton.addEventListener('click', startGame);
