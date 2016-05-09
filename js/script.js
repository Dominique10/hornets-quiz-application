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
		question:"1. What is Dell Curry's first name?",
		answer:"Wardell",
		choices: [
			'Wardell',
			'Kemba',
			'Mugsy',
			'Alonzo'
		]
	 },
	 {
	 	question:"2. Who is the franchise leading scorer?",
	 	answer:"Dell Curry",
	 	choices: [
	 		'Glen Rice',
	 		'Gerald Wallace',
	 		'Dell Curry',
	 		'Larry Johnson'
	 	]
	 },
	 {
	 	question:"3. Who is Grandmama?",
	 	answer:"Larry Johnson",
	 	choices: [
	 		'Larry Johnson',
	 		'Mugsy Bogues',
	 		'David Wesley',
	 		'Bobby Phills'
	 	]
	 },
	 {
	 	question:"4. Who is the only retired Jersey in franchise history?",
	 	answer:"Bobby Phills",
	 	choices: [
	 		'Gerald Wallace',
	 		'Bobby Phills',
	 		'	Stephen Jackson',
	 		'Michael Jordan'
	 	]
	 },
	 {
	 	question:"Founding Year of the Charlotte Hornets?",
	 	answer:"1996",
	 	choices: [
	 		'1992',
	 		'1988',
	 		'1996',
	 		'2001'
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
	$("#playerName").text("Player Name: "+ nameOfUser);
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
 $("#userName").text("");
 $("#result").css("display","none");

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
   	$("span.circle").text(questionNumber);
   	correctAnswer++;
   	console.log("User has " + correctAnswer +" Correct Answers");
   	$(".triviaQuestion").text("Correct Answer").animate({height: "20px"}, 500);
   	$(".triviaQuestion").css("color", "white").animate({height: "20px"}, 500);
   	$(".triviaQuestion").css("background","none");
   	$(".triviaQuestion").css("background-color","green");
   	$("#result").text("Correct Answers: "+correctAnswer+"/5");
   	$("#result").css("display","block");
   	$(".answer li").remove();
   }
   else{
  	$("span.circle").text(questionNumber);
  	console.log("User has " + correctAnswer +" Correct Answers");
  	$(".triviaQuestion").text("Wrong Answer").animate({height: "20px"}, 500);
   	$(".triviaQuestion").css("color", "white").animate({height: "20px"}, 500);
   	$(".triviaQuestion").css("background","none");
   	$(".triviaQuestion").css("background-color","red");
   	$("#result").text("Correct Answers: "+correctAnswer+"/5");
   	$("#result").css("display","block");
   	
   }
   count++;
   questionNumber++;
   if (questionNumber==6) {setTimeout(function(){
   	$("#newGameButton").css("display", "block");
   	$(".triviaQuestion").css("display", "none");
   	},2500);

   	$("#newGameButton").click(function(){
   		$("#intro").css("display","block");
   		$(".triviaQuestion").removeAttr('style');
   		$("#newGameButton").removeAttr('style');
   		$(".answer li").remove();
   		newGame();

   	});
   }
   else {setTimeout(function(){
    //do what you need here
    $(".triviaQuestion").removeAttr('style');
    playGame();
		}, 2500);
 		}
   
 });
 }


 //Display User score & calculate user score
 function userScore(){}

 function incrementQuestionNum(){
 }
});
