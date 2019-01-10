/*Oefening 3
Bouw een html pagina met een knop en een tekstveld. Het doel is om een getal tussen 0 en 100 te vinden. Voor elk antwoord antwoordt de pagina:

meer
minder
juist
Wanneer het antwoord is gevonden, krijgen we het aantal tests dat we hebben nodig gehad te zien via een alert.*/

let aantalguesses = 0;
let random = Math.floor(Math.random() * 99) + 1;

$( "#guess" ).click(function() {
  aantalguesses++;
  let guessvalue = $( "#value" ).val();
  if(random==guessvalue){
    alert("juist, aantal keer geraden: " + aantalguesses);
    
  }else if(random<guessvalue){
    alert("minder");
  }else{
  alert("meer");
  }
  
});
