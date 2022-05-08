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
  let i = 0;
  loopWithDelay();

  function loopWithDelay() {
    setTimeout(function() {
      blinkSector(consiquence[i]);
      i++;
      if (i < consiquence.length) loopWithDelay()
    }, 1000)
  }
}

function blinkSector(sectorNumber) {
  setTimeout(function() {
    sectors[sectorNumber].classList.add('panel__sector_blink');
    setTimeout(() => sectors[sectorNumber].classList.remove('panel__sector_blink'), 500)
  }, 1000)
}

startButton.addEventListener('click', startGame);
