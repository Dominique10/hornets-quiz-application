// Requires the user to answer a number ( at least 5) of questions, one at a time
// Prevents the user from skipping questions
// Gives some way for the user to answer
// Compares the user answer, and the correct answer to determine a score
// When all the questions are answered, display the user score.
// Allow the user to start a new game.
// Use JavaScript objects to represent the questions.
var count;
var correctAnswer;
var trivia=[
	{
		question:"What is Dell Curry's first name?",
		answer:"Wardell",
		choices: [
			'Wardell',
			'Kemba',
			'Mugsy',
			'Alonzo'
		]
	 },
	 {
	 	question:"2Who is the franchise leading scorer?",
	 	answer:"2Wardell",
	 	choices: [
	 		'2Wardell',
	 		'2Kemba',
	 		'2Mugsy',
	 		'2Alonzo'
	 	]
	 },
	 {
	 	question:"3Who is the franchise leading scorer?",
	 	answer:"3Wardell",
	 	choices: [
	 		'Wardell',
	 		'Kemba',
	 		'Mugsy',
	 		'Alonzo'
	 	]
	 },
	 {
	 	question:"4Who is the franchise leading scorer?",
	 	answer:"4Wardell",
	 	choices: [
	 		'Wardell',
	 		'Kemba',
	 		'Mugsy',
	 		'Alonzo'
	 	]
	 },
	 {
	 	question:"5Who is the franchise leading scorer?",
	 	answer:"5Wardell",
	 	choices: [
	 		'Wardell',
	 		'Kemba',
	 		'Mugsy',
	 		'Alonzo'
	 	]
	 }
]


$(document).ready(function(){

	$('.myForm').submit(function(e) {
    /*Remove instrustions*/
    $('#intro').fadeOut(1000);
	 	newGame();
	 	userName();
	 	playGame();
	 	//checkAnswer(count);
    e.preventDefault();
  })

	// $('#startButton').on('click', function(){
	//  	$('#intro').fadeOut(1000);
	//  	userName();
	//  	newGame();
	//  });


	
// clue : jquery's $.each method

//Get user name
function userName(){
	var nameOfUser = $('#userName').val();
	console.log("Name of Current Player is: " + nameOfUser);
	$("#playerName").text(nameOfUser);
}

 // checkAnswer function
 function checkAnswer(questionNumber){
  // 	jQuery.each( trivia[questionNumber].choices, function( i, val ) {
  // 		$(".answer").append("<li>" + val + "</li>");
  // console.log("Choices " + val + "." );})
   if ($(this).text()==trivia[questionNumber].answer) {
   	$("span.circle").text("2/5");
   	correctAnswer++;
   	console.log(correctAnswer);
   }
   else{
  	$("span.circle").text("2/5");
  	console.log(correctAnswer);
   }

  // $(".triviaQuestion").text(trivia[1].question);
  //  jQuery.each( trivia[1].choices, function( i, val ) {
  // 		$(".answer").append("<li>" + val + "</li>")
  // console.log("Choices " + val + "." );})
 }

 //Start New Game
 function newGame(){
 count=0;
 correctAnswer=0;
 questionNumber=2;
 	//User enters name
 //Question
 	//Display first question and answer choices
 // 	$(".triviaQuestion").text(trivia[count].question);
 // 	//$('.answer li').text(trivia[0].choices[0]);
 // 	jQuery.each( trivia[count].choices, function( i, val ) {
 // 		$(".answer").append("<li>" + val + "</li>")
 // console.log("Choices " + val + "." );})

 // 	$( ".answer li" ).click(function() {
 //  $( ".answer li" ).slideUp();
 //  console.log( $(this).text());
 //  //CheckAnswer
 // if ($(this).text()==trivia[count].answer) {
 //   	$("span.circle").text("2/5");
 //   	correctAnswer++;
 //   	console.log("User has " + correctAnswer +"Correct Answers");
 //   }
 //   else{
 //  	$("span.circle").text("2/5");
 //  	console.log("User has " + correctAnswer +"Correct Answers");
 //   }

  // $(".triviaQuestion").text(trivia[1].question);
  //  jQuery.each( trivia[1].choices, function( i, val ) {
  // 		$(".answer").append("<li>" + val + "</li>")
  // console.log("Choices " + val + "." );})
 

//});
 	//Create Var to track correct/incorrect answers
 	//var 
 	//User selects answer
 	return count,correctAnswer, questionNumber;
 }

 //PlayGame
 function playGame(){
 	$(".triviaQuestion").text(trivia[count].question);
 	//$('.answer li').text(trivia[0].choices[0]);
 	jQuery.each( trivia[count].choices, function( i, val ) {
 		$(".answer").append("<li>" + val + "</li>")
 console.log("Choices " + val + "." );})

 	$( ".answer li" ).click(function() {
  $( ".answer li" ).slideUp();
  console.log( $(this).text());
  //CheckAnswer
 if ($(this).text()==trivia[count].answer) {
   	$("span.circle").text(questionNumber + "/5");
   	correctAnswer++;
   	console.log("User has " + correctAnswer +" Correct Answers");
   }
   else{
  	$("span.circle").text(questionNumber + "/5");
  	console.log("User has " + correctAnswer +" Correct Answers");
   }
   count++;
   questionNumber++;
   playGame();
 });
 }


 //Display User score & calculate user score
 function userScore(){}

 function incrementQuestionNum(){
 }
});
