score = 0;
cross = true;
gameaudio = new Audio('Game.mp3');
Over = new Audio('over.mp3');
setTimeout(() => {
    gameaudio.play();
}, 1000);
document.onkeydown = function (e) {

    if (e.key == "w") {
        man = document.querySelector('.man');
        man.classList.add('animateMan');
        setTimeout(() => {
            man.classList.remove('animateMan')
        }, 1000);
    }
    if (e.key == "d") {
        man = document.querySelector('.man');
        manX = parseInt(window.getComputedStyle(man, null).getPropertyValue('left'));
        man.style.left = manX + 110 + "px";
    }
    if (e.key == "a") {
        man = document.querySelector('.man');
        manX = parseInt(window.getComputedStyle(man, null).getPropertyValue('left'));
        man.style.left = manX - 110 + "px";
    }
   
}
setInterval(() => {
    man = document.querySelector('.man');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');
    mx = parseInt(window.getComputedStyle(man, null).getPropertyValue('left'));
    my = parseInt(window.getComputedStyle(man, null).getPropertyValue('bottom'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('bottom'));

    offsetX = Math.abs(mx - ox);
    offsetY = Math.abs(my - oy);
    console.log(offsetX, offsetY);
    if (offsetX <89 && offsetY < 59) {
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('animateHurdle');
        Over.play();
        setTimeout(() => {
            gameaudio.pause();
            Over.pause();
           
        }, 400);
    }
    else if (offsetX <120 && offsetY< 59  && cross) {
        score += 10;
        updateScore(score);
        cross = false;
        
        setTimeout(() => {
            
            cross = true;
            
        }, 1000);
        setTimeout(() => {
            animaDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = animaDur - 0.001;
            obstacle.style.animationDuration = newDur + 's';
        }, 500);


    }

}, 10);
function Playagain(){
    location.reload();
}

function updateScore(score) {
    ScoreCont.innerHTML = "Score: 0" + score;
}
$(document).ready(function() {
    var butn = $(".btn");
    butn.click(function() {
      butn.toggleClass("paused");
      return false;
    });
  });
