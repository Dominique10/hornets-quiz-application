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
	 		'Stephen Jackson',
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
    e.preventDefault();
  })

//Get user name
function userName(){
	var nameOfUser = $('#userName').val();
	console.log("Name of Current Player is: " + nameOfUser);
	$("#playerName").text("Player Name: "+ nameOfUser);
}

 // checkAnswer function
 function checkAnswer(questionNumber){
   if ($(this).text()==trivia[questionNumber].answer) {
   	$("span.circle").text("2/5");
   	correctAnswer++;
   	console.log(correctAnswer);
   }
   else{
  	$("span.circle").text("2/5");
  	console.log(correctAnswer);
   }
 }

 //Start New Game
 function newGame(){
 count=0;
 correctAnswer=0;
 questionNumber=2;
 $("#userName").text("");
 $("#result").css("display","none");
 	return count,correctAnswer, questionNumber;
 }

 //PlayGame
 function playGame(){
 	$(".triviaQuestion").text(trivia[count].question);
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
    $(".triviaQuestion").removeAttr('style');
    playGame();
		}, 2500);
 		}
   
 });
 }
});
