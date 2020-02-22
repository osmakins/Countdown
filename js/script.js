// M.O Akins: Best wishes

// The period calculations
"use strict"

function Counter(newyear) {
  let period = newyear - new Date();
  return {
    'days': Math.floor(period / (1000 * 60 * 60 * 24)),
    'hours': Math.floor((period / (1000 * 60 * 60)) % 24),
    'minutes': Math.floor((period / 1000 / 60) % 60),
    'seconds': Math.floor((period / 1000) % 60),
    'total': period
  };
}

// function for animating the span turn
function animateCounter(span) {
  span.className = "turn";
  setTimeout(function () {
    span.className = "";
  }, 700);
}

// Animating the counter
function startCounter(id, newyear) {
  let roundInterval = setInterval(function () {
    let count = document.getElementById(id), rounds = Counter(newyear);
    let spans = 4, colons = 2;
    if (rounds.total > 1) {
      count.innerHTML = '<span>' + rounds.days + '</span>' + '<div>' + ':' + '</div>'
        + '<span>' + rounds.hours + '</span>' + '<div>' + ':' + '</div>'
        + '<span>' + rounds.minutes + '</span>' + '<div>' + ':' + '</div>'
        + '<span>' + rounds.seconds + '</span>'

      // span animate
      let spanturn = document.getElementsByTagName("span");
      animateCounter(spanturn[3]);
      if (rounds.seconds == 59) animateCounter(spanturn[3]);
      if (rounds.minutes == 59 && rounds.seconds == 59) animateCounter(spanturn[1]);
      if (rounds.hours == 23 && rounds.minutes == 59 && rounds.seconds == 59) animateCounter(spanturn[0]);
    }
    else {
      //check for end of the counter
      for (let i = 0; i < spans; i++) {
        count.innerHTML += '<span>0</span>';
        if (i > colons) { break; }
        count.innerHTML += '<div>:</div>';
        clearInterval(roundInterval);
      }
      //count.innerHTML = '<span>0</span><div>:</div><span>0</span><div>:</div><span>0</span><div>:</div><span>0</span>';
    }
  }, 1000)
}
window.addEventListener('load', function () {
  var newyear = new Date("April 1, 2020 00:00:00");
  startCounter("count", newyear);
})

// Adding the snow effect
window.addEventListener('load', function () {
  // get canvas context
  var canvas = document.getElementById("snow");
  var context = canvas.getContext('2d');

  // set the canvas dimesions
  var W = window.innerWidth;
  var H = window.innerHeight;
  canvas.width = W;
  canvas.height = H;

  // Generate the snowflakes and apply attributes
  var maxf = 100; // maximum flakes
  var flakes = [];

  //loop through to populate flakes array
  for (var i = 0; i < maxf; i++) {
    flakes.push({
      x: Math.random() * W, // horizontal random position
      y: Math.random() * H, // vertical random position
      r: Math.random() * 5 + 2, //minimum size of 2px and maximum of 7px
      d: Math.random() + 1 //density of the flakes
    })
  }

  // draw flakes onto canvas
  function drawFlakes() {
    context.clearRect(0, 0, W, H);
    context.fillStyle = "white";
    context.beginPath();
    for (let i = 0; i < maxf; i++) {
      var f = flakes[i];
      context.moveTo(f.x, f.y);
      context.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
    }
    context.fill();
    moveFlakes();
  }

  var angle = 0;
  // animate the flakes
  function moveFlakes() {
    angle += 0.01;
    for (let i = 0; i < maxf; i++) {
      // store current flake
      var f = flakes[i];

      // update X and Y coordinates of each snowflake - cos x graph path
      f.y += Math.pow(f.d, 2) + 1;
      f.x += Math.cos(angle) * 2;

      // if the snowflake reaches the bottom, send a new one to the top
      if (f.y > H) {
        flakes[i] = { x: Math.random() * W, y: 0, r: f.r, d: f.d };
      }
    }
  }

  setInterval(drawFlakes, 25);
})