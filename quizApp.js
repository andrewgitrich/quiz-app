$(document).ready(function(){

var questions = [
	{choices: ["1973","1962","1933","1955"],
	question: "What year were the steelers founded?",
	answer: "1933"
	},

	{choices: ["4","9","5","6"],
	question: "How many super bowls have the steelers won?",
	answer: "6"
	},

	{choices: ["12","15","0","8"],
	question:"How many cheerleaders are on the squad?",
	answer: "0"
	},

	{choices: ["Pnc Park","Ford Field","Lang Park","Heinz Field"],
	question:"The Stadium where the steelers play?",
	answer: "Heinz Field"
	},

	{choices:["1995","1971","2000","2005"],
	question: "Last time the home stadium wasnt sold out?",
	answer: "1995"
	}
];
var correct =0;
var incorrect = 0;
var currentQuestion = 0;

function generateQuestion(){

//if true then add "game over text"
 if (currentQuestion >= questions.length)
{
        $("questionBloc").text('Game Over');
        $("#reStart").text("Press to restart");
        $("#reStart").on("click", function()
        {
        	correct = 0;
        	incorrect = 0;
        	currentQuestion = 0;
        	$("h2").empty();
        	$("#reStart").empty();
        	generateQuestion();
        });

//comment on the final score of the game by adding text to an h2
        if(correct > 4) 
        	{
            $('h2').text('You scored ' +  correct + '! Well done!');
        	} 
        	else if (correct === 3 || correct === 4){
        		$('h2').text('You scored ' + correct + ' not too bad');
        	}
        	else if(correct < 3){
            	$('h2').text('Not so good, you got ' +  correct + ' correct, better luck next time');
        	}

//clear the question from the ul and score count
        $('ul').empty();
        $("#questionBloc").empty();
        return;
    }

//add the first question, score value, score section and choices to the html
	$("#questionBloc").text(questions[currentQuestion].question);
	$("#correct").text(correct);
	$("#incorrect").text(incorrect);
	
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
		correct += 1;
		$("#correct").text(correct);
		$('ul').empty();
		currentQuestion += 1;
		generateQuestion();
		}
	else 
		{
		incorrect += 1;
		$("#incorrect").text(incorrect);
		$('ul').empty();
		currentQuestion += 1;
		generateQuestion();
		}
});

generateQuestion();

});

//add style to restart button
// add correct and incorrect label

//BUG ALERT! once the game is restarted the second time, the choices only on the 
	//first question get added again and show 2 of the same sets of choices. 
	//then 3 sets on the 3rd restart and so on... 