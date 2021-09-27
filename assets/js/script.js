var score = 0;
var timeRem = 0;
var startBtn = document.getElementById("start")
var dQuestion = document.querySelector("main")
var playerName = document.querySelector("playerScore");
var options = document.getElementById('options');
const option0 = document.getElementById("options0");

var questions = document.getElementById("questions")
var questIons = -1;
var testDiv = document.createElement("div")
var testBtn = document.createElement("button")
testDiv.className = "buddy"
testBtn.className =""




var questionList = [
  {
    quest: "What is your favorite food",
    options: ["Pizza","Tacos","Burgers","Chicken"],
    answer: "Pizza",
  },
  {
    quest: "What is your favorite food",
    options: ["Pizza","Tacos","Burgers","Chicken"],
    answer: "Pizza",
  },
  {
    quest: "What is your  food",
    options: ["Piza","Taco","Burers","Chicen"],
    answer: "Piza",
  },
  {
    quest: "What is your favorite food",
    options: ["Pizza","Tacos","Burgers","Chicken"],
    answer: "Pizza",
  },
  {
    quest: "What is your favorite food",
    options: ["Pizza","Tacos","Burgers","Chicken"],
    answer: "Pizza",
  },
];
function gameOver(){
  timeRem = 0
}
function newQuestions(){
  questIons++;
  if (questIons < questionList.length && timeRem > 0){
    dQuestion.innerHTML = questionList[1].questions;
    runOptions();
  } else {
  stopQuiz();
}
}

function runOptions() {
  console.log(5)
  var displayOptions = quest[i].options;
  questions.innerHTML = displayQuest;
  var displayQuest = questionList[i].quest
  for (var i = 0; i < questionList.length; i++) { 
    
    
    
  questions.className = "buddy" 
  document.getElementById("options"+quest).innerHTML= displayOptions[q]}
    
  };


function setTime(){
  timeRem = 120
  time = setInterval(function() {
    document.getElementById("count").textContent = timeRem;
    timeRem--;
    if (timeRem <= 0){
      clearInterval(timeRem);
      document.getElementById("count").textContent = "0";
      gameOver();
    }
  }, 1000
)}



function startGame() { 
  startBtn.remove();
  setTime()
  runOptions()
  
};

startBtn.addEventListener('click', startGame);
