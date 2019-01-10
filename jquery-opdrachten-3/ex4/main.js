/*Oefening 4
Bouw een html pagina met 5 knoppen en een rechthoek. Elke knop veroorzaakt een actie op de rechthoek.

Knop 1: verhoogt de hoogte met 10px, als deze groter is dan 100px, wordt de hoogte gereset naar 10px.
Knop 2: verandert de rechthoek in groen
Knop 3: reset de oorspronkelijke kleuren
Knop 4: Verwijdert de rechthoek
Knop 5: verschijnt weer de rechthoek*/



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
        