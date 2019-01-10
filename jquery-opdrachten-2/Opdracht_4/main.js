// Wanneer je op een kleurknop klikt, verander je de kleur van de tekst van de div.

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
$('#green').click(changeColorGreen);
$('#red').click(changeColorRed);
$('#blue').click(changeColorBlue);