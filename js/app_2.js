



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



//show question 1 with slider 
//1. create more turns consisting of three different views showUser, showJon and showResult 
//2. html content of different turns should be defined in js
//3. user-input and slider-content should be dynamic in each view
  //make slider-input for user dynamic and store each user input for score-view later in an array 
  //make slider for jon dynamic and store each value for score-view later in an array
  //make slider for correct answer dynamic (and store each value for score-view later in an array
//4. get values and compare them for final score-view

//extra
//make jon a bot with math.random-answers
//



$(user).each (function () {

  var $question = user[i].text;
  var $slider = user[i].slider;
  var $info = user[i].info;
  var $button = user[i].button;

  $('.user').append('<li id="user">' + $user[i].text + '</li>' + $user[i].slider +<'div id="slider"</div>';
  i++
})






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
          userValue1 = $( "#slider1" ).slider("option", "value" );
          document.getElementById('#slider_value_user').innerHTML = userValue1;

        }
      });
    });
  });


//show johns answer with johns slider for question 1

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

  //show correct answer for question 1 with corresponding slider-value

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

  //next turn 2

  //show question 2 with slider 2
  //show jons answer to question 2 with corresponding slider
  //show 




  //score-board
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
  $('#email').addClass('active').val('Cu later!');
  setTimeout(function(){
    $('#form-container').hide();
    $('#update-form').animate({'width': '0px'},300,function(){
      $('#get-updates-link').hide();
    });
  },1000);



});




  });















  