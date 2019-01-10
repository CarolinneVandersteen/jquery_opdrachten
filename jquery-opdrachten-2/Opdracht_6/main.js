// Wanneer de muis over een gekleurde knop beweegt, kleur de tekst. De tekst moet weer zwart worden als de muis de knop verlaat.

var text = $('#text');
function changeColorGreen(){
  text.css('color', 'green');
}
function changeColorRed(){
  text.css('color', 'red');
}
function changeColorBlue(){
  text.css('color', 'blue');
}
function changeColorBlack(){
  text.css('color', 'black');
}
$('#green').hover(changeColorGreen);
$('#red').hover(changeColorRed);
$('#blue').hover(changeColorBlue);
$('.color').mouseleave(changeColorBlack);