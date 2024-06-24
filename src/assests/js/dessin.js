const canvas = document.getElementById('starCanvas');
const ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(50, 10);
ctx.lineTo(60, 40);
ctx.lineTo(90, 40);
ctx.lineTo(65, 60);
ctx.lineTo(75, 90);
ctx.lineTo(50, 70);
ctx.lineTo(25, 90);
ctx.lineTo(35, 60);
ctx.lineTo(10, 40);
ctx.lineTo(40, 40);
ctx.closePath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'black';
ctx.stroke();
ctx.fillStyle = '#D6A211';
ctx.fill();