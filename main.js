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
var xLine = 0;
var onLand = true;
var keyCoolDown = true;
var timerId1, timerId2, timerId3;

function moveTop() {
  if (onLand) {
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
    if(xLine == 100 && yLine == 600 || xLine == 500 && yLine == 500 || xLine == 800 && yLine == 500 || xLine == 800 && yLine == 600 || xLine == 800 && yLine == 700 || xLine == 1100 && yLine == 600 || xLine == 1100 && yLine == 500 || xLine == 1100 && yLine == 400){
    }else{
      keyCoolDown = false;
      xLine = xLine + 100;
      document.getElementById('wolf').style.left = xLine + 'px';
    }
  }
}

function moveLeft() {
  if (xLine > 0) {
    document.getElementById('wolf').style.transform = 'scale(-1, 1)';
    if(xLine == 500 && yLine == 600 || xLine == 500 && yLine == 700 || xLine == 800 && yLine == 500 || xLine == 1100 && yLine == 600 || xLine == 1100 && yLine == 500 ){
    }else{
      keyCoolDown = false;
      xLine = xLine - 100;
      document.getElementById('wolf').style.left = xLine + 'px';
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
    if (xLine == 300 && yLine == 500 || xLine == 200 && yLine == 500 || yLine == 600 && xLine <= 400|| xLine == 400 && yLine == 500 || xLine == 600 && yLine == 400 || xLine == 700 && yLine == 400 || xLine == 900 && yLine == 400 || xLine == 1000 && yLine == 400 || xLine == 1100 && yLine == 600 || xLine == 1200 && yLine == 300 || xLine == 1300 && yLine == 300) {
      onLand = true;
    } else {
      onLand = false;
    }
  }, 10);
}

function resetKeyCool() {
  timerId3 = setInterval(() => {
    keyCoolDown = true;
  }, 200);
}

function deathCheck() {
  timerId3 = setInterval(() => {
    if (xLine == 100 && yLine == 600) {
      document.getElementById('img1').style.top = '630px';
      setTimeout(() => {
        alert('you are dead');
        reset();
      }, 100);
    } else if (yLine == 800) {
      setTimeout(() => {
        alert('you are dead');
        reset();
      }, 100);
    } else if (xLine == 100 && yLine == 200) {
      document.getElementById('img2').style.left = '230px';
      setTimeout(() => {
        alert('you are dead');
        reset();
      }, 100);
    } else if (xLine == 200 && yLine == 300 || xLine == 300 && yLine == 300) {
      document.getElementById('img3').style.top = '280px';
      setTimeout(() => {
        alert('you are dead');
        reset();
      }, 100);
    } else if (xLine == 400 && yLine == 300 || xLine == 300 && yLine == 300) {
      document.getElementById('img4').style.top = '280px';
      setTimeout(() => {
        alert('you are dead');
        reset();
      }, 100);
    } else if (xLine == 400 && yLine == 300 || xLine == 300 && yLine == 300) {
      document.getElementById('img4').style.top = '280px';
      setTimeout(() => {
        alert('you are dead');
        reset();
      }, 100);
    } else {
    }
  }, 50);
}

var timerId4;

function startBlockAction() {
  timerId4 = setInterval(() => {
    if (xLine == 800 && yLine == 400) {
      document.getElementById('block11').style.top = '800px';
    } else {
    }
  }, 10);
}

function reset(){
  yLine = 600;
  xLine = 0;
  document.getElementById('wolf').style.top=yLine + 'px';
  document.getElementById('wolf').style.left=xLine + 'px';
  document.getElementById('img1').style.top='700px';
  document.getElementById('img2').style.left='300px';
  document.getElementById('img3').style.top='200px';
  document.getElementById('img4').style.top='200px';
  document.getElementById('img5').style.left='400px';
  document.getElementById('block11').style.top='500px';
  document.getElementById('wolf').style.transform = 'scale(1, 1)';
}