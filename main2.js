window.onload = function() {
  startGravity();
  checkGround();
  resetKeyCool();
  deathCheck();
  startBlockAction();
}

document.addEventListener('keydown', keydownEvent, false);

function keydownEvent(event) {
  if (event.key === "w") {
    moveTop();
  } else if (event.key === "d") {
    if (keyCoolDown) {
      moveRight();
    }
  } else if (event.key === "a") {
    if (keyCoolDown) {
      moveLeft();
    }
  } else if (event.key === "o") {
    alert(xLine);
    alert(yLine);
  } else if (event.key === "z") {
    reset();
  }
}

var yLine = 600;
var xLine = 1300;
var onLand = true;
var keyCoolDown = true;
var deadCount = 0;
var deadCheck = false;
var timerId1, timerId2, timerId3;

function moveTop() {
  if (false){
    
  } else if (onLand) {
    clearInterval(timerId1);
    yLine = yLine - 100;
    document.getElementById('wolf').style.top = yLine + 'px';
    setTimeout(() => {
      yLine = yLine - 100;
      document.getElementById('wolf').style.top = yLine + 'px';
      setTimeout(() => {
        yLine = yLine - 100;
        document.getElementById('wolf').style.top = yLine + 'px';
        startGravity();
      }, 70);
    }, 70);
  }
}

function moveRight() {
  if (xLine < 1300) {
    document.getElementById('wolf').style.transform = 'scale(1, 1)';
    if (xLine == 700 && yLine == 500 || xLine == 700 && yLine == 600 || xLine == 700 && yLine == 700 || xLine == 400 && yLine == 500 || xLine == 400 && yLine == 600 || xLine == 400 && yLine == 700 || xLine == 1100 && yLine == 100) {
    } 
    else {
      keyCoolDown = false;
      xLine = xLine + 100;
      document.getElementById('wolf').style.left = xLine + 'px';
      resetKeyCool();
    }
  }
}

function moveLeft() {
  if (xLine > 0) {

    document.getElementById('wolf').style.transform = 'scale(-1, 1)';
    if (xLine == 1300 && yLine == 600 || xLine == 1100 && yLine == 500 || xLine == 700 && yLine == 500 || xLine == 700 && yLine == 600 || xLine == 700 && yLine == 700) {
    } 
    else {
      keyCoolDown = false;
      xLine = xLine - 100;
      document.getElementById('wolf').style.left = xLine + 'px';
      resetKeyCool();
    }
  }
}

function startGravity() {
  timerId1 = setInterval(() => {
    if (!onLand) {
      yLine = yLine + 100;
      document.getElementById('wolf').style.top = yLine + 'px';
    }
  }, 200);
}

function checkGround() {
  timerId2 = setInterval(() => {
    if (yLine == 700 || yLine == 500 && xLine == 1200 || yLine == 500 && xLine == 1100 || yLine == 400 && xLine == 1000 || yLine == 400 && xLine == 900 || yLine == 400 && xLine == 800 || xLine == 600 && yLine == 400 || xLine == 500 && yLine == 400 || xLine == 800 && yLine == 200 || xLine == 700 && yLine == 200 || xLine == 900 && yLine == 100 || xLine == 1000 && yLine == 100 || xLine == 1100 && yLine == 100 || xLine == 1200 && yLine == 0 || xLine == 1300 && yLine == 0 || xLine == 1300 && yLine == 600 || xLine == 300 && yLine == 200 || xLine == 400 && yLine == 200 || xLine == 500 && yLine == 200) {
      onLand = true;
    } else {
      onLand = false;
    }
  }, 10);
}

function resetKeyCool() {
  setTimeout(()=>{
    keyCoolDown = true;
  },100)
}

function deathCheck() {
  timerId3 = setInterval(() => {
    if(deadCheck == false){
      if (xLine == 100 && yLine == 600) {
        deadCheck = true;
        document.getElementById('img1').style.top = '630px';
        document.getElementById('over').style.opacity='1';
        setTimeout(() => {
          reset();
        }, 1000);
      }else {
      }  
    } else{}
  }, 50);
}

var timerId4;

function startBlockAction() {
  timerId4 = setInterval(() => {

  }, 10);
}

function reset(){
  yLine = 600;
  xLine = 1300;
  deadCount = deadCount + 1;
  deadCheck = false;
  document.getElementById('p1').innerHTML='You dead' + deadCount + 'times';
  document.getElementById('wolf').style.top=yLine + 'px';
  document.getElementById('wolf').style.left=xLine + 'px';
  document.getElementById('over').style.opacity ='0';
  document.getElementById('wolf').style.transform = 'scale(-1, 1)';
}