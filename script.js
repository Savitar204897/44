const burger = document.getElementById('burger');
const sideMenu = document.getElementById('side-menu');
const closeMenu = document.getElementById('close-menu');

burger.addEventListener('click', () => {
  sideMenu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
  sideMenu.classList.remove('active');
});

// Закрытие меню по клику вне его области
document.addEventListener('click', (e) => {
  if (!sideMenu.contains(e.target) && !burger.contains(e.target)) {
    sideMenu.classList.remove('active');
  }
});
// Кнопка закрытия бокового меню
document.getElementById('close-menu').addEventListener('click', () => {
    document.getElementById('side-menu').style.width = '0';
});

// Пункты с подменю
const sideDropBtns = document.querySelectorAll('.side-dropbtn');

sideDropBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        this.parentElement.classList.toggle('active'); // открытие/закрытие подменю
    });
});
