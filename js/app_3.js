
$(beginGame);

var userValue1;   // user's guess value
var jonValue1;    // answer value
var resultValue1; // correct answer 
var userWins = 0;
var jonWins  = 0;

var questions = [
  {
    question: "Batman v Superman: Dawn of Justice premiered last week starring Ben Affleck as Batman. How old is Ben Affleck?",
    jon: "40",
    answer: "44"
  }, {
    question: "What is the answer?",
    jon: "41",
    answer: "42"
  }, {
    question: "How much does Jon Snow Know?",
    jon: "12",
    answer: "0"
  }
]
var rounds = 0;

function beginGame(){
  $('.start').show();

  // Hide all other sections at the start
  $('.user').hide();
  $('.jon').hide();
  $('.result').hide();
  $('.bumper').hide();

  // Setup slider
  initSlider();

  // Setup events
  $('#showUser1').click(playRound);
  $('#showJon1').click(showJon);
  $('#showResult1').click(showResult);
  $('#showQuestion2').click(bumper);
  $('#email-form').one('submit', emailSignup);
}

function initSlider() {
  $(".slider").slider({
    step: 1,
    min: 0,
    max: 80,
    slide: function(event, ui) {
      userValue1 = $(event.target).slider("option", "value");
      $('#slider_value_user').text(userValue1);
    }
  });
}

function playRound(){
  $('.user').show();

  $('.start').hide();
  $('.jon').hide();
  $('.result').hide();
  $('.bumper').hide();

  // Reset sliders text
  $('#slider_value_user').text("0")

  // Update question
  $('#user').html(questions[rounds].question);
  $('#slider_value_jon').html(questions[rounds].jon);
  $('#answer').html(questions[rounds].answer);
}

function showJon(e) {
  e.preventDefault()
  $('.user').hide();
  $('.jon').show();
}

function showResult(e) {
  e.preventDefault()
  $('.result').show();
  $('.jon').hide();
}

function bumper(e) {
  e.preventDefault()

  if (Math.pow((resultValue1 - userValue1),2) < Math.pow((resultValue1 - jonValue1),2)) {
    userWins++;
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
  }

  rounds++;

  if (questions.length !== rounds) {

    userValue1   = undefined; // user's guess value
    jonValue1    = undefined; // answer value
    resultValue1 = undefined; // correct answer 

    // Reset Slider values
    $('.slider').each(function(){
      $(this).slider('value', 0);
    });

    return playRound();
  }

  $('.bumper').show();
  $('.result').hide();
}

function emailSignup(){
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
}