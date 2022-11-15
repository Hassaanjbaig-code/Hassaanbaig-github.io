const noaction = document.getElementById('close');
const menu = document.getElementById('menu');
const navigation = document.getElementById('navigation');
const click = document.querySelectorAll('.nav-right');

menu.addEventListener('click', () => {
  navigation.classList.add('active');
  noaction.classList.add('noaction');
  menu.classList.add('menu-icon');
});

for (let i = 0; i < click.length; i += 1) {
  click[i].addEventListener('click', () => {
    navigation.classList.remove('active');
    noaction.classList.remove('noaction');
    menu.classList.remove('menu-icon');
  });
}
