let board = document.getElementById("board");
let cells = document.getElementsByClassName("cell");
let player = "X";

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function() {
    if (this.innerHTML === "") {
      this.innerHTML = player;
      checkWin();
      player = (player === "X") ? "O" : "X";
    }
  });
}

function checkWin() {
  let winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    if (
      cells[winningCombinations[i][0]].innerHTML === player &&
      cells[winningCombinations[i][1]].innerHTML === player &&
      cells[winningCombinations[i][2]].innerHTML === player
    ) {
      alert(`Player ${player} wins!`);
      reset();
    }
  }
}

function reset() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }
}

// Null ,NUMBER  ,StRING,SYMBOL, UNDEFINED , BOOLEAN 