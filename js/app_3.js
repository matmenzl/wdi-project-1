
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
    answer: "44",
    more: '<i class="fa fa-external-link"></i>' + ' ' + "<a href='http://www.bbc.co.uk/iplayer/episode/b0759g2t/the-film-review-zootropolis-the-club-batman-v-superman target='_blank''>Movie-Review on BBC </a>"
  }, {
    question: "One week ago, footballer Johan Cruyff passed away. Which back number did Cruyff wear while he was playing?",
    jon: "23",
    answer: "14",
    more: "<i class='fa fa-external-link'></i>" + "<a href='http://www.bbc.co.uk/sport/football/35893452' target='_blank'>Johan Cruyff: Why does Netherlands Great matter?</a>"
  }, {
    question: "How many people in Britain drink alcohol at least once per week? (in Million)",
    jon: "20",
    answer: "28.9",
    more: "<i class='fa fa-external-link'></i>" + "<a href=''http://www.bbc.com/future/story/20151102-why-do-the-british-drink-so-much' target='_blank''>Why do the british drink so much?</a>"
  }, {
    question: "The most popular baby-name last year was Oliver. Do you know how many Olivers were born in 2014? (in Thousands)",
    jon: "1",
    answer: "7",
    more: "<i class='fa fa-external-link'></i>" + "<a href='http://www.bbc.co.uk/news/uk-33959140' target='_blank'>Baby names: Amelia and Oliver top England and Wales list</a>" 
  }, {
    question: "Storm Katie has battered large parts of England, leaving flights cancelled, property damaged and thousands of people without power. How many homes were temporarily without power? (in Thousand)",
    jon: "100",
    answer: "200",
    more: "<i class='fa fa-external-link'></i>" + "<a href='http://www.bbc.co.uk/news/in-pictures-35910151' target='_blank'>Your pictures: Storm Katie destruction across the UK</a>"
  },
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
  $('.ui-slider-handle').draggable();
  initSlider();

  // Setup events
  $('#showUser1').click(playRound);
  $('#showJon1').click(showJon);
  $('#showResult1').click(showResult);
  $('#showQuestion2').click(bumper);
  $('#email-form').one('submit', emailSignup);
}

function initSlider() {
  $('.ui-slider-handle').draggable();
  $(".slider").slider({
    step: 1,
    min: 0,
    max: 200,
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
  $('#more').html(questions[rounds].more);
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
  var resultValue1 = questions[rounds].answer;
  var jonValue1 = questions[rounds].jon;

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