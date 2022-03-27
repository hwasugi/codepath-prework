// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var clueHoldTime = 1000; //will decrement
var mistakes = 0;
var timecount = 15000;
var time;
var seconds = timecount / 1000;

updateDisplay();
displayTime();
timer(true);
timer(false);

//optional functions
//random number function for pattern
function getRandomSequence(max) {
  return Math.floor((Math.random() * max) + 1);
}

//update mistake display
function updateDisplay(){
  let counterDisplayElem = document.querySelector('.counter-display');
  counterDisplayElem.innerHTML = mistakes;
};

//update countdown timer display
function displayTime(){
  let seconds = timecount / 1000;
  document.getElementById("timecount").innerHTML = seconds + " seconds";
  if (timecount < 0) {
    loseGame();
  }
  timecount -= 1000;
}

//start and stop the timer 
function timer(flag) {
  if (flag) {
    time = setInterval(displayTime, 1000);
  }
  else {
    clearInterval(time);
  }
}

function startGame(){
  //initialize game variables
  //random pattern sequence
  pattern = [];
  for(let i=0;i<=8;i++) {
    pattern.push(getRandomSequence(8))
  } 
  progress = 0;
  gamePlaying = true;
  clueHoldTime = 1000;
  mistakes = 0;
  updateDisplay();
  
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  //start timer
  timer(true);
  playClueSequence();
}

function stopGame(){
  //stop timer
  timer(false);
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}


function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  //reset timer
  timecount = 15000;
  guessCounter = 0;
  clueHoldTime -= 100;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  // add game logic here
  //if guessed the wrong button, update mistakes or lose the game
  if (btn != pattern[guessCounter]) {
    mistakes++;
    updateDisplay();
    if (mistakes == 3) {
      loseGame();
    }
  }
  //if guessed the right button:
  //if not the last guess in the current sequence, increase the guess counter
  else if (guessCounter < progress){
    guessCounter++;
  }
  //if it is the last guess in the current sequence:
  else if (guessCounter == progress) {
    //if the player completes the whole sequence in the game, win the game
    if (progress == pattern.length - 1) {
      winGame();
    }
    //if the player completes the sequence but not the last one, continue with the next sequence
    else {
      progress++;
      playClueSequence();
    }
  }
}


function loseGame(){
  clearInterval(false);
  stopGame();
  alert("Game Over. You lost.");
  //reset timer and mistake display
  timecount = 15000;
  mistakes = 0;
  updateDisplay();
  displayTime();
}

function winGame(){
  clearInterval(false);
  stopGame();
  alert("Game Over. You won!");
  //reset timer and mistake display
  timecount = 15000;
  mistakes = 0;
  updateDisplay();
  displayTime();
}


// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 293.7, 
  3: 329.6,
  4: 349.2,
  5: 392,
  6: 440,
  7: 493.9,
  8: 523.3
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
