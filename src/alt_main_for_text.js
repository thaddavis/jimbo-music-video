const canvas = document.getElementById("webgl");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

ctx.font = "300px Helvetica";
// align text horizontally center
ctx.textAlign = "center";
// align text vertically center
ctx.textBaseline = "middle";
ctx.fillStyle = "red";
// ctx.fillText("Hello world", 70, 90, 140);
// ctx.fillText("It's time to say", canvas.width / 2, 400);
// ctx.fillText("the things you've", canvas.width / 2, 400);
// ctx.fillText("always wanted", canvas.width / 2, 400);

// ctx.fillText("Hurry up", canvas.width / 2, 400);
// ctx.fillText("before you", canvas.width / 2, 400);

// ctx.fillText("are forgotten", canvas.width / 2, 400);

ctx.fillText("Hallelujah", canvas.width / 2, 400);
