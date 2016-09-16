
/*
1. You need array of objects called 
Questions e.g. var questions = [...]
2. Each question will have a key called choices which will be array of choices. 
3. Each question will have the question itself and the correct answer

4. You need to create a function called generate which will generate
a question from that array. That means that you for example want to
 iterate over the choices array in the first question and append choices
 to the ul, together with the question. 

5. When choices are appended to the ul, you want to have event delegation
 on that ul so when you click on a specific choice, you will compare it if
  that choice equals the correct answer of that question. If yes, you will go
   to the new question, otherwise, you will tell user that answer is wrong.

6. To track the state of your app (which question you are currently on), 
create a global varriable called currentQuestion and set it initially to 0 
since you want to start at the first question of questions array
*/

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
//add the first question to the html
	$('h1').text(questions[currentQuestion].question);
//add all the choices to the html
	for(var i = 0; i < questions[currentQuestion].choices.length; i++){
		$('ul').append('<li>' + questions[currentQuestion].choices[i]);
	}
}

//answer the question by clicking on an li
$('ul').on('click', 'li', function(){
//compare what has been clicked to the answer and if true...
	if($(this).text() === questions[currentQuestion].answer){
//add 1 to current question
		currentQuestion += 1;
//add 1 to score
		score += 1;
//clear the ul by the .empty method
		$('ul').empty();
//run the function again
		generateQuestion();
	}
//if clicked on incorrect answer subtract from score
	else {
		score -= 1;
	}
});




generateQuestion();