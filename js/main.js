let menuToggle = document.querySelector('#menu-toggle');
let menu = document.querySelector ('.sidebar');
//Отслеживаемклик по кнопке меню и запускаем ф-ю
menuToggle.addEventListener('click', function (event) {
  //Отмена клика
  event.preventDefault();
  //вешаем класс на меню, когда кликнули по кнопке
  menu.classList.toggle('visible');
});