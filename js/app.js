
//get value of slider set
//store values of slider in a variable based on button click
//define jons value of slider and show it on page.
//define result value of slider and show it on page.
//check which answer is closer to the final result
//check var userValue1 and var jonValue1 and what is closer to var resultValue
//loop for second round ??


$(function() {

  var userValue1;
  var jonValue1;
  var resultValue1;


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
        step: 1000,
        min: 100000,
        max: 1000000,
        slide: function( event, ui ) {

          var userValue1 = $( "#slider1" ).slider("option", "value" );
          // console.log(userValue1);
          // $( '#slider_value_user' ).text( ui.value )
          // console.log(userValue1);
          document.getElementById('#slider_value_user').innerHTML = userValue1;

        }
      });
    });
  });



  $(function showJon() {
    $('#showJon1').click(function(e) {
      e.preventDefault()
      $('.user').hide();
      $('.jon').show();
      $( "#slider2" ).slider({
          step: 1000,
          value: 6000000,
          min: 1000000,
          max: 10000000,
          disabled: true,
      });
      var jonValue1 = $( "#slider1" ).slider("option", "value" );
      document.getElementById('#slider_value_jon').innerHTML = jonValue1;
    });
  });

  $(function showResult() {
    $('#showResult1').click(function(e) {
      e.preventDefault()
      $('.result').show();
      $('.jon').hide();

      $( "#slider3" ).slider({
        step: 1000,
        value: 8000000,
        min: 1000000,
        max: 10000000,
        disabled: true,
        });
      var resultValue1 = $( "#slider1" ).slider("option", "value" );
      document.getElementById('#slider_value_result').innerHTML = resultValue1;

    });
  });



  $(function bumper() {
    $('#showQuestion2').click(function(e) {
      e.preventDefault()
      $('.bumper').show();
      $('.result').hide();




    });
  });


});