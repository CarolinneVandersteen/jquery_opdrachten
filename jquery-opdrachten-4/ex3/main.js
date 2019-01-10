/*Oefening 3 :

Maak een formulier aan waarin om de naam, voornaam, e-mailadres entelefoonnummer van de gebruiker wordt gevraagd.
Controleer of het e-mailadres inderdaad een e-mailadres is, controleer of het telefoonnummer
alleen cijfers bevat en of de naam en voornaam alleen letters of streepjes bevatten.*/



$(document).ready(function() {
    $("#phone").change(function() {    // checks phone number
      if(!/\D/.test($("#phone").val())) {
        $("#phone").css("background-color", "green");
      } else {
        $("#phone").css("background-color", "");
      }
    })
  
    $("#mail").change(function() {    // checks e mail
      if(/^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i.test($("#mail").val())) {
        $("#mail").css("background-color", "green");
      } else {
        $("#mail").css("background-color", "");
      }
    })
  
    $("#firstName").change(function() {  //checks first name
      if(/^[a-zA-Z-]+$/.test($("#firstName").val())) {
        $("#firstName").css("background-color", "green");
      } else {
        $("#firstName").css("background-color", "");
      }
    })
  
    $("#lastName").change(function() {  //checks last name
      if(/^[a-zA-Z-]+$/.test($("#lastName").val())) {
        $("#lastName").css("background-color", "green");
      } else {
        $("#lastName").css("background-color", "");
      }
    })
  
  
  
  
  
  
  })
  