$(function() {
 
// $(function(){
//   $('#show').each(function() {
//     $(this).
//   })
// })


//start 
$( ".question1" ).show();
$( ".question2" ).hide();
$( ".question3" ).hide();
$( ".result" ).hide();


//question 1.1
$('#show1').click(function(e) {
e.preventDefault()
$('.question2').show();
$('.question1').hide();
});

//question 1.2
$('#show2').click(function(e) {
e.preventDefault()
$('.question3').show()
$('.question2').hide()
});

//question 1.3
$('#show3').click(function(e) {
e.preventDefault()
$('.result').show()
$('.question3').hide()
});

//result 1
$('#show4').click(function(e) {
e.preventDefault()
$('.result').show()
$('.question3').hide()
});

//question 2.1
$('#show1').click(function(e) {
e.preventDefault()
$('.question4').show()
$('.result').hide()
});

//question 2.2
$('#show2').click(function(e) {
e.preventDefault()
$('.question5').show()
$('.question4').hide()
});

//question 2.3
$('#show3').click(function(e) {
e.preventDefault()
$('.question6').show()
$('.question5').hide()
});

//result 2
$('#show4').click(function(e) {
e.preventDefault()
$('.result2').show()
$('.question6').hide()
});









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