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
  let timerInterval = setInterval(function () {
    let count = document.getElementById(id);
    let rounds = Counter(newyear);

    count.innerHTML = '<span>' + rounds.days + '</span>' + '<div>' + ':' + '</div>'
      + '<span>' + rounds.hours + '</span>' + '<div>' + ':' + '</div>'
      + '<span>' + rounds.minutes + '</span>' + '<div>' + ':' + '</div>'
      + '<span>' + rounds.seconds + '</span>';


    //check for end of the counter
    if (rounds.total < 1) {
      clearInterval(timerInterval);
      count.innerHTML = '<span>0</span><div>:</div><span>0</span><div>:</div><span>0</span><div>:</div><span>0</span>';
    }

  }, 1000);
}

window.addEventListener('load', function () {
  var newyear = new Date("April 12, 2020 00:00:00");
  startCounter("count", newyear);
})


