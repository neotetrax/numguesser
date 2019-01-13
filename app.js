let min = 1,
  max = 10,
  winningNumber = getRandom(min, max);
  guessLeft = 3;

console.log(`Winning number is ${winningNumber}`);
//getting UI Elements
const game = document.querySelector("#game");
const guessInput = document.querySelector("#num-guess");
const minnum = document.querySelector(".min-no");
const maxnum = document.querySelector(".max-no");
const guessbtn = document.querySelector("#num-submit");
const msg = document.querySelector("#message");


//assign min & max

minnum.textContent = min;
maxnum.textContent = max;

//play agin user listner

game.addEventListener('mousedown', function (e) {
  if (e.target.className === "playagain") {
    window.location.reload();
  }
})
//listen fo guess

guessbtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  //validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please Enter Between ${min} and ${max}`, "red");
    return true;
  }
  if (guess === winningNumber) {
    // //game over = won
    //     guessInput.disabled = true;
    // //chage border
    //     guessInput.style.borderColor = "green";
    gameover(true, `${winningNumber} is correct, YOU WIN`)
    // setMessage(`${winningNumber} is correct, YOU WIN`, "green")

  } else {
    ///if worong
    guessLeft -= 1;
    if (guessLeft === 0) {
      // //Disable input
      // guessInput.disabled = true;
      // //chage border
      // guessInput.style.borderColor = "red";
      gameover(false, `Game over, You Lost. the correct number is ${winningNumber}`)
      // setMessage(`Game over, You Lost. the correct number is ${winningNumber}`, "red")
    } else {
      //change border color
      guessInput.style.borderColor = "red";
      //clear input
      guessInput.value = '';
      //answer wrong - continues
      setMessage(`${guess} is not correct, ${guessLeft} guess left`, "red")
    }
  }
});
//game over
function gameover(won, msgg) {
  //   let color;
  won === true ? color = "green" : color = "red";
  //   //Disable input
  guessInput.disabled = true;
  //   //change border
  guessInput.style.borderColor = color;

  //set text color

  msg.style.color = color;
  setMessage(msgg);
  //play again

  guessbtn.value = "Play Again";
  guessbtn.className = "playagain";
}

//get Winnig Num
function getRandom(min, max) {
  Math.random()
  return Math.floor((Math.random() * (max - min + 1) + min));
}

function setMessage(msgg, color) {
  msg.style.color = color;
  msg.textContent = msgg;
}