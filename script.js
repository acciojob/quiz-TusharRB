//your JS code here. If required.
var questions = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  }
];

var currentQuestion = 0;
var score = 0;

var quizContainer = document.getElementById('quiz');
var questionElement = document.getElementById('question');
var aText = document.getElementById('a_text');
var bText = document.getElementById('b_text');
var cText = document.getElementById('c_text');
var dText = document.getElementById('d_text');
var submitButton = document.getElementById('submit');
var resultElement = document.getElementById('result');

function loadQuestion() {
  var currentQuiz = questions[currentQuestion];

  questionElement.textContent = currentQuiz.question;
  aText.textContent = currentQuiz.a;
  bText.textContent = currentQuiz.b;
  cText.textContent = currentQuiz.c;
  dText.textContent = currentQuiz.d;
}

function getSelectedAnswer() {
  var answers = document.getElementsByName('answer');

  for (var i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
      return answers[i].id;
    }
  }

  return undefined;
}

function deselectAnswers() {
  var answers = document.getElementsByName('answer');

  for (var i = 0; i < answers.length; i++) {
    answers[i].checked = false;
  }
}

function showResult() {
  quizContainer.innerHTML = '';
  resultElement.textContent = 'You scored ' + score + ' out of ' + questions.length;

  var reloadButton = document.createElement('button');
  reloadButton.textContent = 'Reload Quiz';
  reloadButton.addEventListener('click', function() {
    location.reload();
  });

  quizContainer.appendChild(reloadButton);
}

function submitAnswer() {
  var selectedAnswer = getSelectedAnswer();

  if (selectedAnswer) {
    if (selectedAnswer === questions[currentQuestion].correct) {
      score++;
    }

    currentQuestion++;
    deselectAnswers();

    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
}

function loadQuestion() {
  var currentQuiz = questions[currentQuestion];

  if (questionElement) {
    questionElement.textContent = currentQuiz.question;
  }
  if (aText) {
    aText.textContent = currentQuiz.a;
  }
  if (bText) {
    bText.textContent = currentQuiz.b;
  }
  if (cText) {
    cText.textContent = currentQuiz.c;
  }
  if (dText) {
    dText.textContent = currentQuiz.d;
  }
}



