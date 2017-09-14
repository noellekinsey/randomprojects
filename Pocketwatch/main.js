/****************
GETTING DOC IDS
****************/

//Hour Hand
var hourHand = document.getElementById('hourhand');

//Minute Hand
var minuteHand = document.getElementById('minutehand');

//Second Hand
var secondHand = document.getElementById('secondhand');


/****************
GETTING CURR TIME
****************/

//Setting Date
function setDate() {
  const now = new Date();
  
  //Getting current seconds
  const seconds = now.getSeconds();
  
  //Compensating for initial transform 
  const secondsDegrees = ((seconds / 60) * 360) + 35;
  
  //Moving hand
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  
  //Getting minutes
  const mins = now.getMinutes();
  
  //Compensating for initial transform
  const minsDegrees = ((mins / 60) * 360);
  
  //Moving hand
  minuteHand.style.transform = `rotate(${minsDegrees}deg)`;
  
  //Getting hours
  const hour = now.getHours();
  console.log(hour);
  //Compensating for intitial transform
  const hourDegrees = ((hour / 12) * 360) + 10;
  
  //Moving hand
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

//Run every second
setInterval(setDate, 1000);
