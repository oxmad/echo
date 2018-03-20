// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//Отключаем ограничение слайдера

document.getElementsByClassName('slicky-list').style= "overflow: visible";

//Открытие/скрытие меню для смартфонов

var nav = document.getElementById('nav-js');

menuBtn.onclick = function () {
  nav.classList.toggle('nav-js');
}

// Прокрутка страницы наверх

$(document).ready(function() {
 
$('#bottom').click(function(){
$('html, body').animate({scrollTop:0}, 'slow');
return false;
});
 
});
