class TicTacToe {
  constructor() {
    this.gridSize = 3;
    this.winCondition = 3;
    this.board = [];
    this.currentPlayer = "X";
    this.gameActive = true;
    this.gameResult = null; // 'win', 'tie', or null
    this.score = { X: 0, O: 0, ties: 0 };

    this.initializeElements();
    this.setupEventListeners();
    this.initializeGame();
  }

  initializeElements() {
    this.gridSizeSelect = document.getElementById("gridSize");
    this.winConditionSelect = document.getElementById("winCondition");
    this.newGameBtn = document.getElementById("newGameBtn");
    this.resetScoreBtn = document.getElementById("resetScoreBtn");
    this.gameBoard = document.getElementById("gameBoard");
    this.currentPlayerSpan = document.getElementById("currentPlayer");
    this.gameStatus = document.getElementById("gameStatus");
    this.scoreX = document.getElementById("scoreX");
    this.scoreO = document.getElementById("scoreO");
    this.scoreTies = document.getElementById("scoreTies");
  }

  setupEventListeners() {
    this.gridSizeSelect.addEventListener("change", () => {
      this.gridSize = parseInt(this.gridSizeSelect.value);
      this.updateWinConditionOptions();
      this.initializeGame();
    });

    this.winConditionSelect.addEventListener("change", () => {
      this.winCondition = parseInt(this.winConditionSelect.value);
    });

    this.newGameBtn.addEventListener("click", () => {
      this.initializeGame();
    });

    this.resetScoreBtn.addEventListener("click", () => {
      this.resetScore();
    });
  }

  updateWinConditionOptions() {
    const winConditionSelect = this.winConditionSelect;
    winConditionSelect.innerHTML = "";

    // Add options from 3 to gridSize (but max 5 for practical reasons)
    const maxWinCondition = Math.min(this.gridSize, 5);
    for (let i = 3; i <= maxWinCondition; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = `${i} in a row`;
      winConditionSelect.appendChild(option);
    }

    // Set default win condition
    this.winCondition = Math.min(this.gridSize, 3);
    winConditionSelect.value = this.winCondition;
  }

  initializeGame() {
    this.board = Array(this.gridSize)
      .fill()
      .map(() => Array(this.gridSize).fill(""));
    this.currentPlayer = "X";
    this.gameActive = true;
    this.gameResult = null;
    this.winningCells = null;
    this.createBoard();
    this.updateDisplay();
  }

  createBoard() {
    this.gameBoard.innerHTML = "";
    this.gameBoard.className = `game-board size-${this.gridSize}`;

    for (let row = 0; row < this.gridSize; row++) {
      for (let col = 0; col < this.gridSize; col++) {
        const cell = document.createElement("button");
        cell.className = "cell";
        cell.dataset.row = row;
        cell.dataset.col = col;
        cell.addEventListener("click", () => this.handleCellClick(row, col));
        this.gameBoard.appendChild(cell);
      }
    }
  }

  handleCellClick(row, col) {
    if (!this.gameActive || this.board[row][col] !== "") {
      return;
    }

    this.board[row][col] = this.currentPlayer;
    this.updateCellDisplay(row, col);

    if (this.checkWinner()) {
      this.gameActive = false;
      this.gameResult = "win";
      this.score[this.currentPlayer]++;
      this.updateDisplay();
      this.highlightWinningCells();
      return;
    }

    if (this.checkTie()) {
      this.gameActive = false;
      this.gameResult = "tie";
      this.score.ties++;
      this.updateDisplay();
      return;
    }

    this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
    this.updateDisplay();
  }

  updateCellDisplay(row, col) {
    const cellIndex = row * this.gridSize + col;
    const cell = this.gameBoard.children[cellIndex];
    cell.textContent = this.board[row][col];
    cell.className = `cell ${this.board[row][col].toLowerCase()}`;
  }

  checkWinner() {
    const directions = [
      [0, 1], // horizontal
      [1, 0], // vertical
      [1, 1], // diagonal \
      [1, -1], // diagonal /
    ];

    for (let row = 0; row < this.gridSize; row++) {
      for (let col = 0; col < this.gridSize; col++) {
        if (this.board[row][col] === "") continue;

        for (const [dRow, dCol] of directions) {
          if (this.checkDirection(row, col, dRow, dCol)) {
            return true;
          }
        }
      }
    }

    return false;
  }

  checkDirection(startRow, startCol, dRow, dCol) {
    const player = this.board[startRow][startCol];
    const winningCells = [[startRow, startCol]];

    for (let i = 1; i < this.winCondition; i++) {
      const newRow = startRow + i * dRow;
      const newCol = startCol + i * dCol;

      if (
        newRow < 0 ||
        newRow >= this.gridSize ||
        newCol < 0 ||
        newCol >= this.gridSize ||
        this.board[newRow][newCol] !== player
      ) {
        return false;
      }

      winningCells.push([newRow, newCol]);
    }

    this.winningCells = winningCells;
    return true;
  }

  checkTie() {
    for (let row = 0; row < this.gridSize; row++) {
      for (let col = 0; col < this.gridSize; col++) {
        if (this.board[row][col] === "") {
          return false;
        }
      }
    }
    return true;
  }

  highlightWinningCells() {
    if (this.winningCells) {
      this.winningCells.forEach(([row, col]) => {
        const cellIndex = row * this.gridSize + col;
        const cell = this.gameBoard.children[cellIndex];
        cell.classList.add("winning");
      });
    }
  }

  updateDisplay() {
    this.currentPlayerSpan.textContent = this.currentPlayer;
    this.scoreX.textContent = this.score.X;
    this.scoreO.textContent = this.score.O;
    this.scoreTies.textContent = this.score.ties;

    if (!this.gameActive) {
      if (this.gameResult === "win") {
        this.gameStatus.textContent = `Player ${this.currentPlayer} wins!`;
        this.gameStatus.style.color =
          this.currentPlayer === "X" ? "#e74c3c" : "#3498db";
      } else if (this.gameResult === "tie") {
        this.gameStatus.textContent = "It's a tie!";
        this.gameStatus.style.color = "#f39c12";
      }
    } else {
      this.gameStatus.textContent = "Game in progress";
      this.gameStatus.style.color = "#555";
    }
  }

  resetScore() {
    this.score = { X: 0, O: 0, ties: 0 };
    this.updateDisplay();
  }
}

// Initialize the game when the page loads
document.addEventListener("DOMContentLoaded", () => {
  new TicTacToe();
});

// Add some fun animations and effects
document.addEventListener("DOMContentLoaded", () => {
  // Add click sound effect (optional - requires audio file)
  const playClickSound = () => {
    // You can add a click sound here if you have an audio file
    // const audio = new Audio('click.wav');
    // audio.play();
  };

  // Add hover effects
  document.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("cell") && !e.target.textContent) {
      e.target.style.backgroundColor = "#f8f9fa";
    }
  });

  document.addEventListener("mouseout", (e) => {
    if (e.target.classList.contains("cell") && !e.target.textContent) {
      e.target.style.backgroundColor = "white";
    }
  });

  // Add keyboard support
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      if (document.activeElement.classList.contains("cell")) {
        document.activeElement.click();
      }
    }
  });

  // Add particles effect for winning (optional enhancement)
  const createParticles = () => {
    const colors = ["#e74c3c", "#3498db", "#f39c12", "#2ecc71", "#9b59b6"];
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement("div");
      particle.style.position = "fixed";
      particle.style.width = "6px";
      particle.style.height = "6px";
      particle.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      particle.style.borderRadius = "50%";
      particle.style.pointerEvents = "none";
      particle.style.left = Math.random() * window.innerWidth + "px";
      particle.style.top = Math.random() * window.innerHeight + "px";
      particle.style.opacity = "0.8";
      particle.style.zIndex = "9999";

      document.body.appendChild(particle);

      // Animate the particle
      const animation = particle.animate(
        [
          { transform: "translateY(0px) rotate(0deg)", opacity: 0.8 },
          { transform: "translateY(-100px) rotate(360deg)", opacity: 0 },
        ],
        {
          duration: 2000,
          easing: "ease-out",
        }
      );

      animation.onfinish = () => {
        document.body.removeChild(particle);
      };
    }
  };

  // Trigger particles on win (you can uncomment this if you want the effect)
  // const originalUpdateDisplay = TicTacToe.prototype.updateDisplay;
  // TicTacToe.prototype.updateDisplay = function() {
  //     const wasActive = this.gameActive;
  //     originalUpdateDisplay.call(this);
  //     if (wasActive && !this.gameActive && this.winningCells) {
  //         setTimeout(createParticles, 500);
  //     }
  // };
});
