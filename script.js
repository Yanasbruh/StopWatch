var sec = 00;
var min = 00;
var appendmin = document.getElementById("min");
var appendsec = document.getElementById("sec");
var start = document.getElementById("start");
var stopt = document.getElementById("stop");
var reset = document.getElementById("reset");
var interval;

function startTimer() {
  min++;

  if (min < 9) {
    appendmin.innerHTML = "0" + min;
  }

  if (min > 9) {
    appendmin.innerHTML = min;
  }

  if (min > 99) {
    sec++;
    appendsec.innerHTML = "0" + sec;
    min = 0;
    appendmin.innerHTML = "0" + 0;
  }

  if (sec > 9) {
    appendsec.innerHTML = sec;
  }
}

start.onclick = function () {
  interval = setInterval(startTimer);
};

stopt.onclick = function () {
  clearInterval(interval);
};

reset.onclick = function () {
  clearInterval(interval);
  min = "00";
  sec = "00";
  appendsec.innerHTML = sec;
  appendmin.innerHTML = min;
};
