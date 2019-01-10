/*Oefening 1 :

Maak een lijst met drie elementen (Rock, Paper, Scissors). Voeg een SPEEL button toe. Wanneer er op SPEEL word gedrukt, kies de computer een element willekeurig uit (Rock, Paper of Scissors). Vergelijk het met het door de speler gekozen element om te zien wie er gewonnen heeft tussen de mens en de machine.

Bonus: Voeg een overwinning en nederlaag teller toe en geef het percentage van de overwinning tegen de computer weer.*/

var items=["rock","paper","scissors"];

console.log("kies een item");

var keuzeSpeler;

 $('#scissors').click(function() {
    var random=  Math.floor(Math.random() * 3); 
    keuzeSpeler="scissors";
    console.log(keuzeSpeler);
    console.log(random);
    console.log(items[random]);
    switch (random) {
        case 0:
            alert("computer koos "+items[random]+ " computer win");
            break;
        case 1:
            alert("computer koos "+items[random]+ " speler wint");
            break;
        case 2:
             alert("computer koos "+items[random]+ " gelijkspel");
        default:
            break;
    }
    
    });


  $('#rock').click(function() {
    keuzeSpeler="rock";
    console.log(keuzeSpeler);
    var random=  Math.floor(Math.random() * 3); 

    switch (random) {
        case 0:
            alert("computer koos "+items[random]+ " gelijkspel");
            break;
        case 1:
            alert("computer koos "+items[random]+ " computer win");
            break;
        case 2:
             alert("computer koos "+items[random]+ " speler win");
        default:
            break;
    }
  });

  $('#paper').click(function() {
    keuzeSpeler="paper";
    console.log(keuzeSpeler);
    var random=  Math.floor(Math.random() * 3); 

    switch (random) {
        case 0:
            alert("computer koos "+ items[random]+ " speler win");
            break;
        case 1:
            alert("computer koos "+ items[random]+ " gelijkspel");
            break;
        case 2:
             alert("computer koos "+ items[random]+ " computer win");
        default:
            break;
    }
  });


  