alert("It is mandatory to select answer of question otherwise you will not be able to proceed on next question")

questionarray = [
  {
    question: "RAM stands for:",
    answer: "Random Access Memory",
    option: ["Read Only Memory", "Random Access Memory", "Central Processing Unit", "None of above"],
  },
  {
    question: "CPU stands for:",
    answer: "Central Processing Unit",
    option: ["Central Part Unit", "Central Plate Unit", "Central Processing Unit", "None of above"],
  },
  {
    question: "ALU stands for:",
    answer: "Arithmatical Logic Unit",
    option: ["Arithmatical Logic Unit", "Arithmatical Line Unit", "Both of above", "None of above"],
  },
];

function showquestion(e) {
  var question = document.getElementById("question");
  question.innerHTML = questionarray[e].question;

  var options = document.getElementsByClassName("options");

  for (var i = 0; i < options.length; i++) {
    options[i].innerHTML = questionarray[e].option[i];
  }

  var resultbtn = document.getElementById("resultbtn");
  resultbtn.classList.add("btnhide");
}

var questionnumber = 0;
var score = 0;
var scoreResult = document.getElementById("score");

if (questionnumber < questionarray.length) {
  function next() {
    validateanswer(questionnumber);

    scoreResult.innerHTML = score;

    if (questionnumber == questionarray.length - 1) {
      var quizfinish = document.getElementById("quizfinish");
      quizfinish.innerHTML = "Quiz finished";
      var resultbtn = document.getElementById("resultbtn");
      resultbtn.classList.add("btnactive");
      var nxtbtn = document.getElementById("nxtbtn");
      nxtbtn.classList.add("btnhide");
    }

    questionnumber++;

    showquestion(questionnumber);

    removeclassactive();
  }
}

function putactiveclass(e) {
  removeclassactive();
  e.classList.add("active");
}

function removeclassactive() {
  var active = document.getElementsByClassName("active");
  for (var i = 0; i < active.length; i++) {
    active[i].classList.remove("active");
  }
}

function validateanswer(e) {
  var active = document.getElementsByClassName("active");
  if (active[0].innerHTML == questionarray[e].answer) {
    score = score + 10;
    console.log(score);
  }
}

function showresult() {
  var finalresult = document.getElementById("finalresult");
  if (score >= 20) {
    finalresult.innerHTML = "you are passed";
  } else {
    finalresult.innerHTML = "you are fail";
  }
  var quizfinish = document.getElementById("quizfinish");
  quizfinish.innerHTML = "";
}
