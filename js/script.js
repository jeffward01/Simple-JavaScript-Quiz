var score = 0;

function submitAnswers() {
  
  //Grab results div
  var results = document.getElementById('results');
  //Set score and total number of questions
  var total = 5;

  //Get user input for each question
  var q1 = document.forms['quizForm']['q1'].value.toString();
  var q2 = document.forms['quizForm']['q2'].value.toString();
  var q3 = document.forms['quizForm']['q3'].value.toString();
  var q4 = document.forms['quizForm']['q4'].value.toString();
  var q5 = document.forms['quizForm']['q5'].value.toString();

  //Load Questions into Question Array
  var questionArray = [q1, q2, q3, q4, q5];

  //Validation
  for (var i = 0; i < questionArray.length; i++) {
    if (questionArray[i] === null || questionArray[i] === '') {
      alert("Oops!  You forgot to answer a question.  Please enter an answer for Question " + [i + 1] + ".");
      return false;
    }
  }
    
  
  //Set correct Answers
  var answers = ["b", "a", "d", "b", "d"];

  //Check for correct answers
  for (var j = 0; j < total; j++) {
    if (questionArray[j] === answers[j]) {
      score = score + 1;
    }
  }
  
  

  results.innerHTML = "<h3>You scored <span> "+ score+ " </span> out of <span> "+total + "</span>.</h3>";
  
  return false;
}
$(document).ready(function(){


  if (jQuery) {
    // jQuery is loaded
    alert("Yeah!");
  } else {
    // jQuery is not loaded
    alert("Doesn't Work");
  }


  $( '.btn' ).click(function() {

    if(score>0){

    $('.btn').toggle( "pulsate" );
  }
  }); //end click
});//end ready
  

  
//
//  $('.btn').click(function(e){
//    $('.btn').fadeOut('slow')
//
////                      function(){
////      $('#bank').fadeIn('slow');
////    });
//  });
//});//End REday
//
//

$(document).ready(function(){
$('.btn').on('click', function(){
  $('#results').slideToggle(1000);
    submitAnswers();
})
});//End Ready



//$('.myLink').on('mouseenter', function(){
//  $('h1').slideToggle(1000);
//
//})
