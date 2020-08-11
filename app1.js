
var user_name = sessionStorage.getItem("userName");
var user_points = sessionStorage.getItem("points");
var TotalQuestion = sessionStorage.getItem("TotalQuestion");
var totalPoints = TotalQuestion * 10;
document.getElementById("name").innerHTML = user_name;
document.getElementById("ans").innerHTML = user_points + " out of "+ totalPoints;
