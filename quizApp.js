
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
	answer: choices[2]
	},

	{choices: ["4","9","5","more than any other team!"],
	question: "How many super bowls have the steelers won?",
	answer: choices[3]
	},

	{choices: ["12","15","none","8"],
	question:"How many cheelerders are on the squad?",
	answer: choices[2]
	},

	{choices: ["Pnc Park","Steeler Stadium","Staples Center","Heinz Field"],
	question:"The Stadium where the steelers play?",
	answer: choices[3]
	},

	{choices:["1995","1971","2000","2005"],
	question: "Last time the Steelers didnt sell out tickes in a home game?",
	answer: choices[0]
	}
];

function generate(array){
	for(var i = 0; i < array.length; i++){
		for(var i = 0; i < array[0]){}
	}
}