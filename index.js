let scores = { home: 0, guest: 0 };
let fouls = { home: 0, guest: 0 };
let period = 1;

// SCORE
function addScore(team, points) {
  scores[team] += points;
  document.getElementById(`${team}-score`).textContent = scores[team];
  highlightLeader();
}

// FOULS
function addFoul(team) {
  fouls[team]++;
  document.getElementById(`${team}-fouls`).textContent = fouls[team];
}

// LEADER HIGHLIGHT
function highlightLeader() {
  document.getElementById("home").classList.remove("leader");
  document.getElementById("guest").classList.remove("leader");

  if (scores.home > scores.guest) {
    document.getElementById("home").classList.add("leader");
  } else if (scores.guest > scores.home) {
    document.getElementById("guest").classList.add("leader");
  }
}

// PERIOD
function nextPeriod() {
  period++;
  document.getElementById("period").textContent = period;
}

// TIMER
let time = 720;
let timerInterval = null;

function updateTimer() {
  let min = Math.floor(time / 60);
  let sec = time % 60;
  document.getElementById("timer").textContent =
    `${min}:${sec < 10 ? "0" : ""}${sec}`;
}

function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(() => {
      if (time > 0) {
        time--;
        updateTimer();
      }
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  pauseTimer();
  time = 720;
  updateTimer();
}

// NEW GAME
function newGame() {
  scores = { home: 0, guest: 0 };
  fouls = { home: 0, guest: 0 };
  period = 1;
  time = 720;

  document.getElementById("home-score").textContent = 0;
  document.getElementById("guest-score").textContent = 0;
  document.getElementById("home-fouls").textContent = 0;
  document.getElementById("guest-fouls").textContent = 0;
  document.getElementById("period").textContent = 1;

  resetTimer();
  highlightLeader();
}

