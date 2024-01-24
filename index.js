
const canvasPlot = document.getElementById('canvas_plot')
const ctx = canvasPlot.getContext('2d')
const canvasPlotWidth = canvasPlot.clientWidth;
const canvasPlotHeight = canvasPlot.clientHeight;
console.log(canvasPlotWidth, canvasPlotHeight);
const scaleX = 200;
const scaleY = 200;

ctx.rect(800, 800, 150, 100);
if (ctx.isPointInPath(20, 50)) {
  ctx.stroke();
};

var grd = ctx.createRadialGradient(23, 90, 10, 190, 20, 500);
grd.addColorStop(0, "red");
grd.addColorStop(1, "blue");
grd.addColorStop(1, "green");

// Заполнить фигуру градиентом
ctx.fillStyle=grd;
ctx.fillRect(5, 30, 700, 100);

ctx.font = "60px Georgia";
ctx.strokeText("Hello World!", 10, 90);

ctx.font = "30px Verdana";

// Создаем градиент
var gradient = ctx.createLinearGradient(0, 0, c.width, 0);
gradient.addColorStop("0", "magenta");
gradient.addColorStop("0.5", "blue");
gradient.addColorStop("1.0", "red");

ctx.shadowBlur = 60;
ctx.shadowColor = "black";
ctx.fillStyle = "red";
ctx.fillRect(800, 20, 100, 80);
