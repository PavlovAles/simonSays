const panel = document.querySelector('.panel');
const startButton = panel.querySelector('.panel__button-start');
const levelPanel = panel.querySelector('.panel__level');
const sectors = panel.querySelectorAll('.panel__sector');
let level = 0;
let gameOrder = [];
let playerOrder = [];

function startNewLevel() {
  playerOrder = [];
  increaseLevel();
  increaseGameOrder(gameOrder);
  showGameOrder(gameOrder);
}

function increaseLevel() {
  level++;
  levelPanel.textContent = level;
}

function hideStartButton() {
  startButton.classList.add('panel__button-start_hidden');
  startButton.setAttribute('disabled', '');
}

function showStartButton() {
  startButton.classList.remove('panel__button-start_hidden');
  startButton.removeAttribute('disabled', '');
}

function increaseGameOrder() {
  const randomSector = Math.floor(Math.random() * 4);
  gameOrder.push(randomSector);
}

function showGameOrder() {
  for (let i = 0; i < gameOrder.length; i++) {
    setTimeout(function timer() {
      blinkSector(gameOrder[i]);
    }, i * 1000);
  }
}

function blinkSector(sectorNumber) {
    sectors[sectorNumber].classList.add('panel__sector_blink');
    setTimeout(() => sectors[sectorNumber].classList.remove('panel__sector_blink'), 500)
}

function checkPlayerOrder() {
  let check = playerOrder[playerOrder.length - 1] === gameOrder[playerOrder.length - 1];
  console.log(`gameOrder: ${gameOrder} - playerOrder: ${playerOrder}`);
  if (!check) {
    gameover()
  }
  if (check && playerOrder.length === gameOrder.length) {
    setTimeout(() => startNewLevel(), 2000);
  }
}

function gameover() {
  levelPanel.textContent = 'fail';
}

function addToOrder(sector) {
  const sectorNumber = +sector.id[7];
  playerOrder.push(sectorNumber);
}

sectors.forEach(sector => sector.addEventListener('click', (evt) => {
  blinkSector(evt.target.id[7]);
  addToOrder(evt.target);
  checkPlayerOrder();
}));

startButton.addEventListener('click', () => {
  hideStartButton();
  startNewLevel();
})

