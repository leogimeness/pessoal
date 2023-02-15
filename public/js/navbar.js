const games = document.getElementById('games');
const merchandise = document.getElementById('merchandise');
const acessories = document.getElementById('acessories');

const submenuG = document.getElementById('submenuG')
const submenuM = document.getElementById('submenuM')
const submenuA = document.getElementById('submenuA')

games.addEventListener('click', (e) => {
  submenuG.style.opacity = 1;
  e.preventDefault();
})

merchandise.addEventListener('click', (e) => {
  submenuM.style.opacity = 1;
  e.preventDefault();
})

acessories.addEventListener('click', (e) => {
  submenuA.style.opacity = 1;
  e.preventDefault();
})

