/****************
GETTING DOC IDS
*****************/

// Right Cymbal
rightCymbal = document.getElementById('rightcymbal');
rightCymbalAudio = document.getElementById('rightCymbalAudio');

//Right Drum
rightDrum = document.getElementById('tomright');
rightDrumAudio = document.getElementById('rightDrumAudio');

//Bass
bassDrum = document.getElementById('bassdrum');
bassDrumAudio = document.getElementById('bassDrumAudio');

//Top Drum
topDrum = document.getElementById('topdrum');
topDrumAudio = document.getElementById('topDrumAudio');

//White Drum
whiteDrum = document.getElementById('floordrum');
whiteDrumAudio = document.getElementById('whiteDrumAudio');

//Left Cymbal
leftCymbal = document.getElementById('leftcymbal');
leftCymbalAudio = document.getElementById('leftCymbalAudio');


/****************
RIGHT CYMBAL STUFF
*****************/

//Right Cymbal Up Animation
var rightCymb = new TimelineMax({
	paused: true
});
rightCymb.to(rightCymbal, .1, {y:-170, ease: Bounce.easeOut});
rightCymb.to(rightCymbal, .1, {y:-168, ease: Bounce.easeOut});
//Right Cymbal Audio
function playRightCymbalAudio() {
  rightCymbalAudio.currentTime = 0;
  rightCymbalAudio.play();
}

//Complete Right Cymbal
function rightCymbalUp() {
    rightCymb.restart();
    rightCymb.play();
    playRightCymbalAudio();
}

//Right Cymbal Listener
rightCymbal.addEventListener("click", rightCymbalUp);


/****************
RIGHT DRUM STUFF
*****************/

//Right Drum Audio
function playRightDrumAudio() {
  rightDrumAudio.currentTime = 0;
  rightDrumAudio.play();
}

//Right Drum Listener
rightDrum.addEventListener("click", playRightDrumAudio);


/****************
BASS DRUM STUFF
*****************/

var bassD = new TimelineMax({
	paused: true
});
bassD.to(bassDrum, 0.1, {scale: 1.08, transformOrigin: "50% 100%", ease: Expo.easeOut})
.to(bassDrum, 0.4, {scale: 1.02, transformOrigin: "50% 100%", ease: Elastic.easeOut});

//Bass Drum Audio
function playBassDrumAudio() {
  bassDrumAudio.currentTime = 0;
  bassDrumAudio.play();
}

//Bass Drum Complete
function bassDrums(){
	bassD.restart();
	bassD.play();
	playBassDrumAudio();
}

//Bass Drum Listener
bassDrum.addEventListener("click", bassDrums);


/****************
TOP DRUM STUFF
*****************/

//Top Drum Animation
var topD = new TimelineMax({
	paused: true
});
topD.to(topDrum, 0.1, {scale: 1.04, transformOrigin: "50% 50%", ease: Expo.easeOut})
.to(topDrum, 0.4, {scale: 1.03, transformOrigin: "50% 100%", ease: Elastic.easeOut});

//Top Drum Audio
function playTopDrumAudio() {
	topDrumAudio.currentTime = 0;
	topDrumAudio.play();
}

//Top Drum Complete
function topDrums(){
	topD.restart();
	topD.play();
	playTopDrumAudio();
}

//Top Drum Listener
topDrum.addEventListener("click", topDrums);


/****************
WHITE DRUM STUFF
*****************/

//White Drum Animation
var whiteFloor = new TimelineMax({
	paused: true
});
whiteFloor.to(whiteDrum, 0.1, {scaleX: 1.01, transformOrigin: "50% 50%", ease: Expo.easeOut})
.to(whiteDrum, 0.1, {scaleY: 0.99, transformOrigin: "50% 100%", ease: Expo.easeOut}, '0')
.to(whiteDrum, 0.4, {scale: 1, transformOrigin: "50% 100%", ease: Elastic.easeOut});

//White Drum Audio
function playWhiteDrumAudio() {
  whiteDrumAudio.currentTime = 0;
  whiteDrumAudio.play();
}

//White Drum Complete
function floorDrum(){
	whiteFloor.restart();
	whiteFloor.play();
	playWhiteDrumAudio();
}

//White Drum Listener
whiteDrum.addEventListener("click", floorDrum);


/****************
LEFT CYMBAL STUFF
*****************/

//Left Cymbal Animation
var leftCymb = new TimelineMax({
  paused: true
});
leftCymb.to(leftCymbal, 0.1, {rotation: 20, transformOrigin: "50% 50%"})
  .to(leftCymbal,1.5, {rotation: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(1.5, 0.1)});

//Left Cymbal Audio
function playLeftCymbalAudio() {
  leftCymbalAudio.currentTime = 0;
  leftCymbalAudio.play();
}

//Left Cymbal Complete
function leftC(){
  leftCymb.restart();
  leftCymb.play();
  playLeftCymbalAudio();
}

//Left Cymbal Listener
leftCymbal.addEventListener("click", leftC);

//Prevent text highlight??
document.addEventListener('mousedown', function (event) {
  if (event.detail > 1) {
    event.preventDefault();
  }
}, false);
