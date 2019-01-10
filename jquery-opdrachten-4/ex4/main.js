/*Oefening 4 :

Maak een formulier aan waarin naam, voornaam, geboortedatum, geboortedatum, geboorteplaats,
 werk en bedrijf worden aangevraagd. Maak een "Genereer" knop om een korte presentatie zin te maken.

Voorbeeld: Als de ingevoerde gegevens zijn: Lesley Forn, 11/11/1987, Amsterdam, Coach, Genk 
dan wordt de presentatie zin: Lesley Forn, Geboren op 11/11/1987 in Amsterdam, momenteel een Coach in Genk.*/

$("#play").click(function(){

    var Naam = $("#Naam").val();
    var Vnaam = $("#Vnaam").val();
    var Geboortedatum = $("#Geboortedatum").val();
    var Geboorteplaats = $("#Geboorteplaats").val();
    var Positie = $("#Positie").val();
    var Bedrijf = $("#Bedrijf").val();
    var Txt = $("#txt");

    Txt.text(
        //Lesley Forn, Geboren op 11/11/1987 in Amsterdam, momenteel een Coach in Genk.
        Vnaam+" "+Naam+", Geboren op "+Geboortedatum+" in "+Geboorteplaats+", momenteel een "+Positie+" in "+Bedrijf
    )
});