$(function() {

// $(function(){
//   $('#show').each(function() {
//     $(this).
//   })
// })




$(function start () {
  $('.start').show();
  $('.user').hide();
  $('.jon').hide();
  $('.result').hide();
  $('.bumper').hide();
});


$(function showUser() {
  $('#showUser1').click(function(e) {
    e.preventDefault()
    $('.user').show();
    $('.start').hide();


    
    $( "#slider1" ).slider({
     value:10,
     min: 0,
     max: 500,
     step: 10,
     slide: function( event, ui ) {
       $( "#amount" ).val( "$" + ui.value );
     }
    });
    $( "#amount" ).val( "$" + $( "#slider1" ).slider( "value" ) );

  });
});


$(function showJon() {
  $('#showJon1').click(function(e) {
    e.preventDefault()
    $('.user').hide();
    $('.jon').show();

    $( "#slider2" ).slider({
     value:10,
     min: 0,
     max: 500,
     step: 10,
     slide: function( event, ui ) {
       $( "#amount" ).val( "$" + ui.value );
     }
    });
    $( "#amount" ).val( "$" + $( "#slider2" ).slider( "value" ) );



  });
});

$(function showResult() {
  $('#showResult1').click(function(e) {
    e.preventDefault()
    $('.result').show();
    $('.jon').hide();



    $( "#slider3" ).slider({
     value:10,
     min: 0,
     max: 500,
     step: 10,
     slide: function( event, ui ) {
       $( "#amount" ).val( "$" + ui.value );
     }
    });
    $( "#amount" ).val( "$" + $( "#slider3" ).slider( "value" ) );


  });
});


$(function nextQuestion() {
  $('#showQuestion2').click(function(e) {
    e.preventDefault()
    $('.bumper').show();
    $('.result').hide();

  });
});


});