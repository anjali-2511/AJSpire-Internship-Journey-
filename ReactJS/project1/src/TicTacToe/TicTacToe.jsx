
import React, { useState } from "react";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);

  const winningline = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = () => {
    for (let combo of winningline) {
      const [a, b, c] = combo;
      if (
        board[a] &&
        board[a] === board[b] &&
        board[a] === board[c]
      ) {
        return board[a];
      }
    }
    return null;
  };

  const winner = checkWinner();

  const Click = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";

    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setIsXTurn(true);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-3">Tic Tac Toe</h2>

        <h5 className="text-center text-primary mb-4">
          {winner
            ? `Winner: ${winner}`
            : board.every((cell) => cell)
            ? "Match Draw!"
            : `Turn: ${isXTurn ? "X" : "O"}`
            }
        </h5>

        <div className="row g-2">
          {board.map((cell, index) => (
            <div className="col-4" key={index}>
              <button
                className="btn btn-outline-dark w-100"
                style={{
                  height: "90px",
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
                onClick={() => Click(index)}
              >
                {cell}
              </button>
            </div>
          ))}
        </div>

        <button
          className="btn btn-success mt-4 w-100"
          onClick={resetGame}
        >
          Restart Game
        </button>
      </div>
    </div>
  );
}

export default TicTacToe;