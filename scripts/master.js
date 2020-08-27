let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let count = 0;

function xd() {
  for (let i = 0; i < 100; i++){
    let color = Math.random()*255;
    //ctx.fillStyle = "rgba("+ Math.random()*255 +", "+ Math.random()*255 +", "+ Math.random()*255 +", 0.1)";
    ctx.fillStyle = "rgba("+color+","+color+","+color+", 0.1)";
    ctx.fillRect(Math.random()*ctx.canvas.width-20, Math.random()*ctx.canvas.height-20, Math.random()*100+1, Math.random()*100+1);
  }
}

document.addEventListener('closed', function() {
  alert("puto");
});

function epi(){
  let body = document.getElementById("body");
  //body.style = "background-color: rgb("+ Math.random()*255 +", "+ Math.random()*255 +", "+ Math.random()*255 +");";
  count+=5;
  if (count > 360) {
    count = 0;
  }
  body.style = "background-color: hsl("+count%360+", 100%, 50%)";
}

setInterval(function () {
  epi();
}, 1);
