ctx.fillStyle = "lime";
ctx.fillRect(canv.width/2, canv.height/2, SIZE-2, SIZE-2);
setInterval(function(){
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canv.width, canv.height);
  ctx.fillStyle = "lime";
  px += xd;
  py += yd;
  if (px < 0) px = 19;
  if (py < 0) py = 19;
  if (px > 19) px = 0;
  if (py > 19) py = 0;
  snake.push({x:px, y:py});
  for (let i=0; i<snake.length-1; i++){
    ctx.fillRect(snake[i].x*SIZE, snake[i].y*SIZE, SIZE-2, SIZE-2);
    if (snake[i].x == px && snake[i].y == py){
      tail = MIN;
    }
  }
  while (snake.length > tail) {
    snake.shift();
  }
  if (appleX == px && appleY == py){
    tail++;
    appleX = Math.floor(Math.random()*canv.width/SIZE);
    appleY = Math.floor(Math.random()*canv.height/SIZE);
  }
  ctx.fillStyle = "red";
  ctx.fillRect(appleX*SIZE, appleY*SIZE, SIZE-2, SIZE-2);
  if (appleX2 == px && appleY2 == py){
    tail--;
    appleX2 = Math.floor(Math.random()*canv.width/SIZE);
    appleY2 = Math.floor(Math.random()*canv.height/SIZE);  
  }
  score.innerHTML = tail;
  ctx.fillStyle = "blue";
  ctx.fillRect(appleX2*SIZE, appleY2*SIZE, SIZE-2, SIZE-2);
  if (tail < 1){
    tail = 1;
  }
}, 1000/FPS);
