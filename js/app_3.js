
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
  var jonWins = 0;
  var userWins = 0;


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
      $('.ui-slider-handle').draggable();


      $( "#slider1" ).slider({
        step: 1,
        min: 0,
        max: 80,
        slide: function( event, ui ) {
          // $('.ui-slider-handle').draggable();
          userValue1 = $( "#slider1" ).slider("option", "value" );
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
        step: 1,
        value: 40,
        min: 0,
        max: 100,
        disabled: true,
      });
      jonValue1 = $( "#slider2" ).slider("value" );
      document.getElementById('#slider_value_jon').innerHTML = jonValue1;
    });
  });

  $(function showResult() {
    $('#showResult1').click(function(e) {
      e.preventDefault()
      $('.result').show();
      $('.jon').hide();

      $( "#slider3" ).slider({
        step: 1,
        value: 44,
        min: 0,
        max: 100,
        disabled: true,
      });
      resultValue1 = $( "#slider3" ).slider("value" );
      document.getElementById('#slider_value_result').innerHTML = resultValue1;

    });
  });

  $(function bumper() {
    $('#showQuestion2').click(function(e) {
      e.preventDefault()
      $('.bumper').show();
      $('.result').hide();
        console.log(resultValue1);
        console.log(userValue1);
        console.log(jonValue1);
   
        if (Math.pow((resultValue1 - userValue1),2) < Math.pow((resultValue1 - jonValue1),2)) {
          userWins++;
          console.log(userWins);
          $('#userWins').html(userWins);

        } else if (Math.pow((resultValue1 - userValue1),2) == Math.pow((resultValue1 - jonValue1),2)) {
          userWins++
          jonWins++
          $('#userWins').html(userWins);
          $('#jonWins').html(jonWins);

        } else {
          jonWins++;
          console.log(jonWins);
          $('#jonWins').html(jonWins);

        };
      


    });
  });


  $('#email-form').one('submit',function(){
  var emailAddress = encodeURIComponent($('#email').val());
  var baseURL = 'https://docs.google.com/forms/d/1warZS731hYg-8hsnzHWc8IS47GYvWGrIB36brVGCtHM/formResponse?entry.1693324356=';
  var submitRef = '&submit=submit';
  var submitURL = (baseURL + emailAddress + submitRef);
  $(this)[0].action=submitURL;
  $('#email').addClass('active').val('Thank You!');
  setTimeout(function(){
    $('#form-container').hide();
    $('#update-form').animate({'width': '0px'},300,function(){
      $('#get-updates-link').hide();
    });
  },1000);



});




  });















  