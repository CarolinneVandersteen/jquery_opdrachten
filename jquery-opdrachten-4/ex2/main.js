/*Oefening 2 :

Vraag aan de hand van een formulier naar het salaris, het geslacht en het aantal kinderen van een persoon.

Bereken het salaris door de volgende kosten in mindering te brengen:

Uitgaven: 18%;
Verzekering: 7%;
Bijdragen: 5%;
Het is mogelijk om onder bepaalde voorwaarden kortingen te krijgen op de totale kosten:

Als de werknemer een vrouw is, krijgt ze 2% korting.
Indien de werknemer 3 kinderen ten laste heeft, krijgt hij 1% korting.
Als de werknemer 4 kinderen ten laste heeft, krijgt hij 2% korting.*/



$(document).ready(function(){

let butten=$("knop");  


$("#knop").click(function(event) {
    event.preventDefault();



    let loon = $("#loon").val();
    console.log(loon);
    let geslacht = $( "#geslacht" ).val();
    console.log(geslacht);
    let kinderen = $("#aantalKinderen").val();
    console.log(kinderen);
    
    let uitgaven = percentage(loon,18);
    let verzekering = percentage(loon,7);
    let bijdragen = percentage(loon,5);
    let korting = 0;
    let kosten = calcCost(uitgaven, verzekering, bijdragen);
    
    
    if (geslacht == "Vrouw"){
      korting =  korting + percentage(kosten,2);
    }
    
    let  aantal=parseInt(kinderen);

    if(aantal==3){
        korting = korting + percentage(kosten,1);

    }
    else if(aantal>3){
        korting = korting + percentage(kosten,2);

    }
    let resultaat = (loon - (kosten-korting));
    alert(resultaat);
    });
    
    
    function percentage(num, per){
      return (num/100)*per;
    }

    function calcCost(uitgaven, verzekering, bijdragen){
        return uitgaven+verzekering+bijdragen;
    }
    console.log(calcCost(100, 50, 10));
    
});
