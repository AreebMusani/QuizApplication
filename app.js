let questions = [
  {
    id: 1,
    question: "Q1) What is the full form of RAM?",
    answer: "Random Access Memory",
    options: [
      "Random Access Memory",
      "Randomely Access Memory",
      "Run Aceapt Memory",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "Q2) What is the full form of CPU?",
    answer: "Central Processing Unit",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "Q3) What is the full form of E-mail?",
    answer: "Electronic Mail",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  },
  {
    id: 4,
    question: "Q4) What does CSS stand for?",
    answer: "Cascading Style Sheets",
    options: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheet",
      "None of the these",
    ]
  },
  {
    id: 5,
    question: "Q5) What is the full form of PC?",
    answer: "Personal Computer",
    options: [
      "Paper Cup",
      "Plastic Car",
      "Personal Computer",
      "None of these"
    ]
  }
];
let question_count = 0;
let points = 0;

window.onload = function () {
  var userName = prompt("Enter your name");
  if(userName == ""){
    alert("UserName Should not be null")
    location.href = "index.html";
  }
  sessionStorage.setItem("userName", userName);
  sessionStorage.setItem("TotalQuestion", questions.length);
  show(question_count);
  startTime();
};
function startTime() {
  var startingMin = 1;
  var time = startingMin * 60;
  var timerPara = document.getElementById("timer");

  function updateCountDown() {
    var minutes = Math.floor(time / 60)
    var seconds = time % 60;

    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    timerPara.innerHTML = minutes + ":" + seconds;
    time--;

    if (minutes == 00 && seconds == 00) {
      alert("Sorry your time is Up");
      window.location.href = "result.html";
    }
  }
  setInterval(updateCountDown, 1000);
}
function next() {
  let user_answer = document.querySelector("div.form-check.active").childNodes[3].innerHTML;
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  if (question_count == questions.length - 1) {
    location.href = "result.html";
  }
  question_count++;
  let option = document.querySelectorAll("div.form-check");
  for (let i = 0; i < option.length; i++) {
    if (option[i].classList.contains("active")) {
      option[i].classList.remove("active");
      option[i].childNodes[1].checked = false;
    }
  }
  show(question_count);
}

function show(count) {
  var question = document.getElementById("quess");
  question.innerHTML = questions[count].question;
  var opt = document.getElementsByClassName("c");
  for (var i = 0; i < opt.length; i++) {
    opt[i].innerHTML = questions[count].options[i];
  }
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("div.form-check");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].childNodes[1].checked = true;
      option[i].classList.add("active");
    };
  }
}
