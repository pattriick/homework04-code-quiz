var currentScore = 0;
// var secondsRemaining = 10;

var startBtn = document.querySelector("#start");

var timerEl = document.querySelector(".timer");
var questionIdx = 0;

var questions = [
  {
    question: "What type of programming language is JavaScript?",
    answers: [
      "Object oriented",
      "Logic oriented",
      "Procedural",
      "Functional"
    ]
  },
  
  {
    question: "How can Gary be such an amazing teacher?",
    answers: [
      "He really isn't.",
      "Why can't Katy teach the class?",
      "Can we get our money back?",
      "He's too damn old"
    ]
  }
]


// var myCountdown = setInterval(function() {

// }, 1000);

var secondsRemaining = 60;

function startTheGame() {
  
  var myCountdown = setInterval(function() {
    secondsRemaining --;
    timerEl.textContent = secondsRemaining;
   

    if (secondsRemaining == 0) {
      gameOvertext = document.querySelector("#card");
      gameOvertext.value = "Game Over";
      clearInterval(myCountdown);
    }
  }, 1000);
}
startTheGame();


  // figure which item to get from the array whenever this function is called
  
 

  
  // create an h2 tag, give it the text of the question
  // create a ul tag 
  // for each answer, create an li tag

  // add all this stuff to the DOM



// When the user clicks start, what needs to happen:
   // Timer starts 
   // Display a question
     // showAQuestion()




function showQuestion(){
  // startTheGame();
  const currQuestion = questions[questionIdx];
  var section = document.createElement("section");

  console.log("hi");


  document.body.appendChild(section);

  // create an h2 tag, give it the text of the question
  var q = document.createElement("h2");
  q.textContent = currQuestion.question;
  document.body.appendChild(q);

  // create a ul tag 
  var ul = document.createElement("ul");
  document.body.appendChild(ul);

  // for each answer, create an li tag by loopong over the answers
  for( var i = 0; i < currQuestion.answers.length; i++ ){
    var currAnswer = currQuestion.answers[i];
    // make li tag
    var answer = document.createElement("li");
    answer.textContent = currAnswer;
    document.body.appendChild(answer);
      
    console.log(currAnswer);

    // make a button inside the li 
    button = document.createElement("button");
    button.textContent = "Click";
        // add button to the li
    document.body.appendChild(button);
    // give li tag value of answer
    correctAnswer = answer[0];

    button.addEventListener("click", newQuestion)
    
    function newQuestion(){
    if ("click", currAnswer[0]){
      prompt("nice!");
    } else if ("click", currAnswer[1,2,3])
      prompt("wrong!");
    }
    // return;
    // add li tag to ul 
  }

  // add ul to the section


  // add all this stuff to the DOM
  }


// event listeners
   // clicking the start button 
   // when they choose an answer

startBtn.addEventListener("click", showQuestion);