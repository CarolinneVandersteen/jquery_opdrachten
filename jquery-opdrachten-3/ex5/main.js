/*Oefening 5
Bouw een html pagina met een vierkant. Wanneer een richtingstoets wordt ingedrukt (pijltjes toetsen), beweegt het vierkantje 10px in de juiste richting.

BONUS: Wanneer het blok de ene kant van de pagina bereikt, moet het aan de andere kant weer verschijnen.*/



let deltaX=0;
let deltaY=0;
let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
ctx.rect(20, 20, 20, 20);
ctx.stroke();

$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        deltaX -= 10;
        break;

        case 38: // up
        deltaY -= 10;
        break;
        
        case 39: // right
        deltaX += 10;
        break;

        case 40: // down
        deltaY += 10;
        break;

        default: return; // exit this handler for other keys
    }
    ctx.clearRect(0,0, c.width, c.height); 
    ctx.beginPath();
    ctx.rect(20+deltaX, 20+deltaY, 20, 20);
    ctx.stroke();
});
