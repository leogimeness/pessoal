const user = document.getElementById('username');
const logoutBtn = document.getElementById('logout-btn');

user.addEventListener('mouseover', ()=> {
        logoutBtn.style.display ='block'
})

user.addEventListener('mouseout', () => {
    logoutBtn.style.display = 'none';
  });