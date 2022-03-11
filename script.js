const player1Btn = document.getElementById("player-1");
const player2Btn = document.getElementById("player-2");
const generateNumber = document.getElementById("generate");
const luckNumber = document.getElementById("lucky-number");
const guessedNum1 = document.getElementById("guess-1");
const guessedNum2 = document.getElementById("guess-2");
const resetBtn = document.getElementById("reset");
const congrats = document.getElementById("congrats");
resetBtn.disabled = true;
player1Btn.disabled = true;
player2Btn.disabled = true;

let resultedNum = 0;

generateNumber.addEventListener("click", () => {
  const number = Math.ceil(Math.random() * 10);
  luckNumber.innerText = number;
  resultedNum = number;
  console.log(resultedNum);
  generateNumber.disabled = true;
  player1Btn.disabled = false;
  player2Btn.disabled = false;
});

player1Btn.addEventListener("click", () => {
  clicked(
    guessedNum1,
    player1Btn,
    player2Btn,

    resultedNum,
    congrats,
    resetBtn,
    generateNumber,
    1
  );
});

player2Btn.addEventListener("click", () => {
  clicked(
    guessedNum2,
    player2Btn,
    player1Btn,

    resultedNum,
    congrats,
    resetBtn,
    generateNumber,
    2
  );
});

const clicked = (
  placeNum,
  btn1,
  btn2,

  resultedNum,
  congrats,
  resetBtn,
  generateNumber,
  num
) => {
  const number = Math.ceil(Math.random() * 10);
  placeNum.innerText = `Player-${num}-${number}`;
  btn1.disabled = true;
  btn2.disabled = false;
  if (resultedNum === number) {
    congrats.innerText = `Congratulations!Player -${num} is the winner`;

    resetBtn.disabled = false;
    btn1.disabled = true;
    btn2.disabled = true;
    generateNumber.disabled = true;
  }
};

resetBtn.addEventListener("click", () => {
  resultedNum = 0;
  luckNumber.innerText = 0;
  guessedNum1.innerText = `Player-1-0`;
  guessedNum2.innerText = `Player-2-0`;
  generateNumber.disabled = false;
  player1Btn.disabled = true;
  player2Btn.disabled = true;
  resetBtn.disabled = true;
  congrats.innerText = "";
});
