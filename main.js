console.log("Hi there!");
let darkMode = document.body.style.background
//dark/light mode
function toggleFunction(){
  let element = document.body;
  element.classList.toggle("dark-mode"); // toggle används för att multiple 'clicka' typ som hide and show
}

//2. Function to refresh web page ///////////////////////////////////////////////////////////////
function refreshFunction(){
  if(confirm("Are ypu sure, you want to Refresh web page?")){
    location.reload();
  }
}

let position = 0;
let correct = 0;
let quiz;
let quiz_status;
let question;
let answerA;
let answerB;
let correctAnswer;
let wrongAnswer;
let False = "False";
let True = "True";
let executed = false;

let quizQuestions = [
  {
    question: "Is it true that the average person laughs around 17 times in a day?",
    a: "True",
    b: "False",
    answer: "True",
    correctAnswer:"Correct! The averege person laughts 17 time in a day.",
    wrongAnswer: "Wrong choice...",
  },
  {
    question: "In Georgia (the state), it's illegal to eat fried chicken with a fork.",
    a: "True",
    b: "False",
    answer: "True",
    correctAnswer: "Correct! You got it right, it is illegal.",
    wrongAnswer: "Wrong choice...",
  },
  {
    question: "Frech fries originate comes from France.",
    a: "True",
    b: "False",
    answer: "False",
    correctAnswer: "Correct! Frech fries comes from Belgium",
    wrongAnswer: "Wrong Choice...",
  },
  {
    question: "Italy is the European country that eats the most chocolate per capita.",
    a: "True",
    b: "False",
    answer: "False",
    correctAnswer: "Correct! Fun fact, but it's Switzerland.",
    wrongAnswer: "Wrong Choice... ",
  },
  {
    question: "Octopuses is sea creature that has three hearts",
    a: "True",
    b: "False",
    answer: "True",
    correctAnswer: "Correct! ",
    wrongAnswer: "Wrong Choice...",
  },
  {
    question: "Las Vegas is famous by slogan: 'What Happens in Vegas, Stays in Vegas'.",
    a: "True",
    b: "False",
    answer: "True",
    correctAnswer: "Correct! ",
    wrongAnswer: "Wrong Choice...",
  },
  {
    question: "'www' stands for World Web Wide.",
    a: "True",
    b: "False",
    answer: "False",
    correctAnswer: "Correct! It was tricky one! Look again -  World Wide Web! ",
    wrongAnswer: "Wrong Choice...",
  },
  {
    question: "Octagon is a geometric shape generally used for stop signs.",
    a: "True",
    b: "False",
    answer: "True",
    correctAnswer: "Correct! ",
    wrongAnswer: "Wrong Choice...",
  },
  {
    question: "Is it true that 12 languages are written from right to left?",
    a: "True",
    b: "False",
    answer: "True",
    correctAnswer: "Correct! Yep it is 12 languages.",
    wrongAnswer: "Wrong Choice...",
  },
  {
    question: "Is it true that China invented ice cream?",
    a: "True",
    b: "False",
    answer: "True",
    correctAnswer: "Correct! Strange, but it is true.",
    wrongAnswer: "Wrong Choice...",
  },
];

// this function renders a question on the page
function setQuestion() {
  quiz = document.getElementById("quiz");
  if (position >= quizQuestions.length) {
    quiz.innerHTML =
      "<h3>You got " + correct + " of " + quizQuestions.length + " questions correct.</h3><label><input type='button' class='btn btn-outline' value='Start again' onclick='setQuestion()'></label>";

    document.getElementById("quiz_status").innerHTML = "Quiz completed";
    // resets the variable to allow users to restart the quiz
    position = 0;
    correct = 0;
    // stops rest of setQuestion function, running when quiz is completed
    return false;
  }

  let para = document.getElementById("quiz_status");
  para.innerHTML = "Question " + (position + 1) + " of " + quizQuestions.length;

  question = quizQuestions[position].question;
  answerA = quizQuestions[position].a; //True
  answerB = quizQuestions[position].b; //False
  correctAnswer = quizQuestions[position].correctAnswer;
  wrongAnswer = quizQuestions[position].wrongAnswer;

  // display the question
  /*
  let h3 = document.createElement("h3");
  h3.innerHTML = question;
  quiz.appendChild(questionElemenetH3);
  */
  quiz.innerHTML = "<h3>" + question + "</h3>";

  // display the answer options
  // trying to make code only i JS från html
  quiz.innerHTML += "<label> <input type='button' class='m-1' value='" + answerA + "' onclick='checkAnswer(" + answerA + ")'></label>";
  quiz.innerHTML += "<label> <input type='button' class='m-1' value='" + answerB + "' onclick='checkAnswer(" + answerB + ")'></label>";
  executed = false;
}

function checkAnswer(answer) {
  // check if answer matches the correct choice
  if (!executed) {
    if (answer == quizQuestions[position].answer) {
      //each time there is a correct answer, value increases to count total corrects
      correct++;
      
      quiz.innerHTML += "<div class='success'><p style='color:green'>" + correctAnswer + "</p><button onclick='setQuestion()' class='btn'>Next</button></div>";
      executed = true;
    } else {
      quiz.innerHTML += "<div class='unsuccess'><p style='color:red'>" + wrongAnswer + "</p><button onclick='setQuestion()' class='btn'>Next</button></div>";
      executed = true;
    }
    position++;
  }
}

function startQuiz() {
  setQuestion();
  document.getElementById("quiz-intro").classList.add("hide");
  document.getElementById("quiz-content").classList.remove("hide");
}
