//will pull data from api
//display in bar graph for each question's answers
//label the graph
//may use external library for picking colors

var height;
var width;
var canvas = document.getElementById("onlyChildGraph");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#99434c";
// ctx.fillRect(0, 0, 150, 75);

ctx.beginPath();

ctx.fillText("Number of Answers", 0, 20);
