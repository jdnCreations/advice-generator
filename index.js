const button = document.querySelector('button');
const id = document.getElementById('id');
const advice = document.getElementById('advice');
const dice = button.querySelector('svg');

const API = "https://api.adviceslip.com/advice";

button.classList.add('animateDice');
getAdvice();


// event listener button (dice)
button.addEventListener('click', () => {

  getAdvice();
  button.classList.remove('animateDice');
  void button.offsetWidth;
  button.classList.add('animateDice');
});

// get advice from API
async function getAdvice() {
  // button.classList.add('animateDice');


  const response = await fetch(API);
  const slip = await response.json();
  
  
  id.innerHTML = `advice # ${slip.slip.id}`;
  advice.innerHTML = slip.slip.advice;
}


