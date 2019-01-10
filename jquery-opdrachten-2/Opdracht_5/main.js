// Wanneer de gebruiker op een veld gefocused, stelt u de rand ervan in op "1px solid green". Wanneer het veld niet meer scherp is, zet de rand op "1px solid red".

$('#first_name').focus(function(){
    $(this).css({
      'border':'1px solid green',
      'box-shadow': 'none'
    });
  });
  $('#name').focus(function(){
    $(this).css('border','1px solid green');
  });
  $('#first_name').blur(function(){
    $(this).css('border','1px solid red');
  });
  $('#name').blur(function(){
    $(this).css('border','1px solid red');
  });