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
  var newyear = new Date("January 1, 2020 00:00:00");
  startCounter("count", newyear);
})


