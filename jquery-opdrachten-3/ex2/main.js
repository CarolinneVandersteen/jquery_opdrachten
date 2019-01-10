//Oefening 2
//Bouw een html pagina met een "+" knop, een "-" knop en 
//een tekstveld waarin het aantal staat die verhoogd of verlaagd wordt volgens de aangeklikte knoppen.



let aantal = 0;
$( "#add" ).click(function() {
  aantal++;
  $("#clickAmount").val(aantal);
});

$( "#subtract" ).click(function() {
  aantal--;
  $("#clickAmount").val(aantal);
});