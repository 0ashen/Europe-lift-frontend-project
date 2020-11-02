// var canvas = document.getElementById("cursor__canvas");
// var ctx = canvas.getContext("2d");
// var DOCUMENT_WIDTH = document.body.clientWidth;
// var DOCUMENT_HEIGHT = document.body.clientHeight;
// var POSX = 0;
// var POSY = 0;

// canvas.setAttribute("width", DOCUMENT_WIDTH + "px");
// canvas.setAttribute("height", DOCUMENT_HEIGHT + "px");
// document.addEventListener("mousemove", function(e) {
//     POSX = e.clientX;
//     POSY = e.clientY;
// });
// function Render() {
//     window.requestAnimationFrame(Render);
//     ctx.clearRect(0, 0, DOCUMENT_WIDTH, DOCUMENT_HEIGHT);

//     ctx.save();
//     ctx.beginPath();
//     ctx.arc(POSX, POSY, 50, 0, 2 * Math.PI);
//     ctx.fillStyle = "green";
//     ctx.fill();
//     ctx.closePath();
//     ctx.restore();
// }

// Render();
