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


