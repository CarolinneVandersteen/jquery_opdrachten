//Oefening 1
//Bouw een html-pagina met een knop en een tekstveld waarin het aantal klikken op de knop wordt weergegeven.

let aantal = 0;
$( "#click-me" ).click(function() {
  aantal++;
  $("#clickAmount").val(aantal);
});