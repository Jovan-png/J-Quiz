
// Assinged Variables
var questionNum = -1;
var score = 0;
var timeRem = 0;
var startBtn = document.getElementById("start")
var main = document.getElementById("quiz");
var answerCheck = document.getElementById("answerCheck")
var playerName = document.getElementById("playerNS")
var scoreNum = document.getElementById("scoreNum")
var questionList = [
  {
    quest: "If you wanted to create a header which tag would you use?",
    options: ["<p>","<h1>","<div>","<span>"],
    answer: "<h1>",
  },
  {
    quest: "What is your favorite food",
    options: ["Pizza","Tacos","Burgers","Chicken"],
    answer: "Pizza",
  },
  {
    quest: "What is your  food",
    options: ["Pizza","Taco","Burers","Chicen"],
    answer: "Pizza",
  },
  {
    quest: "What is your favorite food!",
    options: ["Pizza","Tacos","Burgers","Chicken"],
    answer: "Pizza",
  },
  {
    quest: "What is your favorite food?",
    options: ["Pizza","Tacos","Burgers","Chicken"],
    answer: "Chicken",
  },
];


$("#highScore .playerNS").val(localStorage.getItem("playerName"))

// Starts Quiz with timer
function startQuiz() {
  timeRem = 60;
  timer = setInterval(function () {
    document.getElementById("count").innerHTML = timeRem;
    timeRem--;
    if (timeRem <= 0) {
      clearInterval(timer);
      document.getElementById("count").textContent = "0";
      stoQuiz();
    }
  }, 1000);

  startBtn.remove();
  startQuestions();
}

// Goes through different questions
function startQuestions() {
  questionNum++;

  if (questionNum < questionList.length && timeRem > 0) {
    main.innerHTML = questionList[questionNum].quest;
    makeButtons();
  } else {
    stoQuiz();
  }
};


// Saves Name And Ending Score To LocalStorage
function saveBtn(){
  pName = document.getElementById("playerName")
  var pNameVal = pName.value;
 score = score
 localStorage.setItem(pNameVal, score)

  
  }

// If answer is wrong time is decremented
function wrong(){
  timeRem -= 20
answerCheck.innerHTML = "<h4 class = 'fade-in'>WRONG<h4><hr>";

}


//stops quiz if all questions are answered or if timer hits zero
function stoQuiz(){
  main.innerHTML = "<h1> GAME OVER<h1>" +"<h2>Your score is <h2>" + score 
  + "<br><div><input type = text id = 'playerName' placeholder = 'Enter Your Name Here'>" +
  '<button onclick="saveBtn()">Click me</button><div>'
}


// Creates buttons from the array
function makeButtons() {
  var btnsDiv = document.createElement("div");
  for (var i = 0; i < questionList[questionNum].options.length; i++) {
    var optionsBtn = document.createElement("button");
    optionsBtn.className = "a-btn";
    optionsBtn.textContent = questionList[questionNum].options[i];
    btnsDiv.appendChild(optionsBtn);
    main.append(btnsDiv);
    optionsBtn.setAttribute("onclick", "checkAnswer(questionList[questionNum].answer, event.target.textContent)");
  };
};



// Checks to see if answers match the correct anwer and also add score if correct
function checkAnswer(answer,userChoice) {
  if (answer == userChoice) {
    score = score + 15;
    answerCheck.innerHTML = "<h4 class = 'fade-in'>CORRECT<h4><hr>"
  } else {
    wrong();

  }
  startQuestions();
};


function endQuiz(){
  optionsBtn.remove
}

// Starts entire Quiz
startBtn.addEventListener('click', startQuiz);



/*
Old Test Code
function startGame4(){
  startBtn.remove()
  var btn1 = document.createElement("button")
  var btn2 = document.createElement("button")
  var btn3 = document.createElement("button")
  var btn4 = document.createElement("button")
  btn1.className = "a-btn"
  btn2.className = "a-btn"
  btn3.className = "a-btn"
  btn4.className = "a-btn"
  btn1.textContent = questionList[0].options[0]
  btn2.textContent = questionList[1].options[1]
  btn3.textContent = questionList[2].options[2]
  btn4.textContent = questionList[3].options[3]
  main.appendChild(btn1)
  main.appendChild(btn2)
  main.appendChild(btn3)
  main.appendChild(btn4)
if (btn1 === answer[1]){
  console.log(yes)
}

}
*/
