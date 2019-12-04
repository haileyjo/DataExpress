//will pull data from api
//display in bar graph for each question's answers
//label the graph
//may use external library for picking colors

var canvas = document.getElementById("onlyChildGraph");
var childCtx = canvas.getContext("2d");
childCtx.fillStyle = "#99434c";

function drawLine(ctx, startX, startY, endX, endY, color) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(startX, startY);
  ctx.lineTo(endX, endY);
  ctx.stroke();
  ctx.restore();
}

function drawBar(ctx, x, y, width, height, color) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
  ctx.restore();
}

function drawGraph(ctx, yesHeight, noHeight) {
  yesHeight = yesHeight * 10;
  noHeight = noHeight * 10;

  ctx.font = "15px Arial";
  drawBar(ctx, 0, 70, 50, yesHeight, '#99434c');
  ctx.fillText("Yes", 15, 60);
  drawBar(ctx, 60, 70, 50, noHeight, '#99434c');
  ctx.fillText("No", 75, 60);
  ctx.fillText("12", 15, yesHeight + 90);
  ctx.fillText("12", 75, noHeight + 90);
}

drawGraph(childCtx, 12, 15);