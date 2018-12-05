let startPoint = 0;
let sliderWidth = 1920;
let slider = document.getElementById("slider");
let buttons = document.querySelectorAll('.img-btn');
let next = document.getElementById("img-next");
let prev = document.getElementById("img-prev");
const sliderTime = 6000;
let startLoop = setInterval(function() {
  sliderLeft();
}, sliderTime);

window.onload = function() {
  startLoop;
};

next.addEventListener("click", sliderLeft, false);
prev.addEventListener("click", sliderRight, false);


slider.onmouseenter = function() {
  clearTimeout(startLoop);
}

buttons.forEach(function(button){
  button.onmouseenter = function(){
    clearTimeout(startLoop);
  }
  button.onmouseleave = function(){
    startLoop = setInterval(function(){
      sliderLeft();
    }, sliderTime);
  }
});

slider.onmouseleave = function() {
  startLoop = setInterval(function() {
    sliderLeft();
  }, sliderTime);
}

function bannerLoop() {
  sliderLeft();
}

function sliderLeft() {
  startPoint -= sliderWidth;
  if (startPoint <= -sliderWidth * 3) {
    startPoint = 0;
  }
  slider.style.left = startPoint + "px";
}

function sliderRight() {
  startPoint += sliderWidth;
  if (startPoint > 0) {
    startPoint = -sliderWidth * 2;
  }
  slider.style.left = startPoint + "px";
}


// SideMenu
const main = document.getElementById('main');
function openSideMenu() {
  document.getElementById('sideNav').style.width = '300px';
  // main.style.marginLeft = '300px';
}

  

// console.log(document.getElementById('sideNav').style.width = '300px');


function closeSideMenu() {
  document.getElementById('sideNav').style.width = '0px';
  // document.getElementById('main').style.marginLeft = '0px';
}

