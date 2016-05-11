var nameOfUser;
var count;
var correctAnswer;
var answer;
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
	 	question:"5. Founding Year of the Charlotte Hornets?",
	 	answer:"1988",
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
    	nameOfUser = $('#userName').val();
    	$('#userName').val("");
    	$("#playerName").text("Player Name: "+ nameOfUser);
  }

  // checkAnswer function answer is the user selected answer
  // count is the question the user is on.
  function checkAnswer(answer,count){
    //CheckAnswer
      if (answer==trivia[count].answer) {
      	//Update Correct Answer Count
       	correctAnswer++;
       	//CSS Updates
       	$(".triviaQuestion").text("Correct Answer").animate({height: "20px"}, 500);
       	$(".triviaQuestion").css("color", "white").animate({height: "20px"}, 500);
       	$(".triviaQuestion").css("background","none");
       	$(".triviaQuestion").css("background-color","green");
       	$("#result").text("Correct Answers: "+correctAnswer+"/5");
       	$("#result").css("display","block");
      }
      else{
      	//CSS Updates
      	$(".triviaQuestion").text("Wrong Answer").animate({height: "20px"}, 500);
       	$(".triviaQuestion").css("color", "white").animate({height: "20px"}, 500);
       	$(".triviaQuestion").css("background","none");
       	$(".triviaQuestion").css("background-color","red");
       	$("#result").text("Correct Answers: "+correctAnswer+"/5");
       	$("#result").css("display","block");
      }
  }

  //Start New Game
  function newGame(){
     count=0;
     correctAnswer=0;
     questionNumber=1;
     $("#userName").text("");
     $("#result").css("display","none");
     return count,correctAnswer, questionNumber;
  }

  //PlayGame
  function playGame(){
   	$(".triviaQuestion").text(trivia[count].question);
   	jQuery.each( trivia[count].choices, function( i, val ) {
     	$(".answer").append("<li>" + val + "</li>")
    });

   	$( ".answer li" ).click(function() {
      $( ".answer li" ).slideUp();
      answer = $(this).text();
      checkAnswer(answer,count);
      count++;
      questionNumber++;
      gameOver();
    });
  }
  //Check to see if user has answer all questions
  function gameOver(){
  	if (questionNumber==6) {
        setTimeout(function(){
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
      else {
        setTimeout(function(){
          $(".triviaQuestion").removeAttr('style');
          playGame();
          $("span.circle").text(questionNumber);
      	}, 2500);
      }
  }
});
