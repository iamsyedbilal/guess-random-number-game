"use strict";

let score = 20;
let highScore = Number(localStorage.getItem("highScore")) || 0;

const setMessage = function (msg) {
  document.querySelector(".message").textContent = msg;
};

const setScore = function (value) {
  score = value;
  document.querySelector(".score").textContent = score;
};

const body = document.querySelector("body");
const number = document.querySelector(".number");
const guessInput = document.querySelector(".guess");
const userHighScore = document.querySelector(".highscore");
userHighScore.textContent = highScore;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);

setScore(score);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(guessInput.value);
  if (!guess || isNaN(guess)) {
    setMessage("Enter a Valid Number❌");
    return;
  }
  if (secretNumber === guess) {
    setMessage("🏆Correct Guess✔");
    number.textContent = secretNumber;
    body.style.backgroundColor = "#5dd55d";
    if (score >= highScore) {
      highScore = score;
      console.log("high", highScore);
      localStorage.setItem("highScore", highScore);
      userHighScore.textContent = highScore;
    }
    return;
  }
  if (score > 1) {
    setMessage(
      guess > secretNumber
        ? "You're Guess is too High😣"
        : "You'r Guess is too Low😣"
    );
    setScore(score - 1);
  } else {
    setMessage("Game Over Mate😣");
    body.style.backgroundColor = "#c03b31";
    setScore(0);
  }
});

document.querySelector(".again").addEventListener("click", function () {
  setScore(20);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  setMessage("Start guessing...");
  guessInput.value = "";
  number.textContent = "?";
  body.style.backgroundColor = "#222";
});

document
  .querySelector(".reset-highscore")
  .addEventListener("click", function () {
    localStorage.removeItem("highScore");
    highScore = 0;
    userHighScore.textContent = 0;
  });
