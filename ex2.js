let randNum = Math.floor(Math.random() * 10) + 1;
let num;
let guesses = 0;
let text;
const submit = document.getElementById("submit");
const newnum = document.getElementById("new");
const guessnum = document.getElementById("guesses");
const feedback = document.getElementById("feedback");
const guessCntArea = document.getElementById("guesscnt");

newnum.addEventListener("click", function () {
  randNum = Math.floor(Math.random() * 10) + 1;
  submit.disabled = false
  guesses = 0
  guessCntArea.innerHTML = "start guessing"
  console.log(randNum);
});

submit.addEventListener("click", function () {
  guesses++;
  num = Number(document.getElementById("num").value);
  if (num == randNum) {
    text = "correct";
    submit.disabled = true
  } else if (num > randNum) {
    text = "too high";
  } else {
    text = "too low";
  }
  guessnum.innerHTML = `Guess: ${num}`;
  feedback.innerHTML = text;
  guessCntArea.innerHTML =
    guesses == 1 ? `${guesses} guess` : `${guesses} guesses`;
});
