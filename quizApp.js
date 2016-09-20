$(document).ready(function(){

var questions = [
	{choices: ["1973","1962","1933","1955"],
	question: "What year were the steelers founded?",
	answer: "1933"
	},

	{choices: ["4","9","5","more than any other team!"],
	question: "How many super bowls have the steelers won?",
	answer: "more than any other team!"
	},

	{choices: ["12","15","none","8"],
	question:"How many cheelerders are on the squad?",
	answer: "none"
	},

	{choices: ["Pnc Park","Steeler Stadium","Staples Center","Heinz Field"],
	question:"The Stadium where the steelers play?",
	answer: "Heinz Field"
	},

	{choices:["1995","1971","2000","2005"],
	question: "Last time the Steelers didnt sell out tickes in a home game?",
	answer: "1995"
	}
];

var score = 0;
var currentQuestion = 0;

function generateQuestion(){

//if true then add "game over text"
 if (currentQuestion >= questions.length)
{
        $("questionBloc").text('Game Over');
        $("#reStart").text("Press to restart");
        $("#reStart").on("click", function()
        {
        	currentQuestion = 0;
        	score = 0;
        	$("h2").empty();
        	$("#reStart").empty();
        	generateQuestion();
        });

//comment on the final score of the game by adding text to an h2
        if(score > 4) {
            $('h2').text('You scored ' +  score + '! Well done!');
        } else if(score < 3) {
            $('h2').text('Damn man, that is horrible. Did you literally score ' +  score + ' !?!?!?');
        }

//clear the question from the ul and score count
        $('ul').empty();
       // $("h4").empty();
        //$("h3").empty();
        $("#questionBloc").empty();
        return;
    }

//add the first question, score value, score section and choices to the html
	$("#questionBloc").text(questions[currentQuestion].question);
	$("h4").text(score);
	$("h3").text("SCORE");
	for(var i = 0; i < questions[currentQuestion].choices.length; i++)
		{
		$('ul').append('<li>' + questions[currentQuestion].choices[i]);
		}
}

//answer the question by clicking on an li
$('ul').on('click', 'li', function()
{
	
	if($(this).text() === questions[currentQuestion].answer)
		{

		currentQuestion += 1;
		score += 1;
		$("h4").text(score);
		$('ul').empty();
		generateQuestion();
		}
	else 
		{
		score -= 1;
		$("h4").text(score);
		}
});

generateQuestion();

});
//add buttons for the choices
//add sounds when game starts and or when buttons clicked
//change pics for each question

//BUG ALERT! once the game is restarted the second time, the choices only on the 
	//first question get added again and show 2 of the same sets of choices. 
	//then 3 sets on the 3rd restart and so on... 