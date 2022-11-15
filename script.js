const noaction = document.getElementById('close');
const menu = document.getElementById('menu');
const navigation = document.getElementById('navigation');
const click = document.querySelectorAll('.nav-right');

menu.addEventListener('click', () => {
  navigation.classList.add('active');
  noaction.classList.add('noaction');
  menu.classList.add('menu-icon');
});