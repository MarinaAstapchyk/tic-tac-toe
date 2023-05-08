import './App.css';
import {useEffect, useState} from "react";
import Board from "./components/Board";


function App() {
  const [board, setBoard] = useState(new Array(9).fill(null));
  const [symbol, setSymbol] = useState("X");
  const [winner, setWinner] = useState(null);
  const [score, setScore] = useState({ 'X' : 0, '0' : 0 })

  const move = (value, index) => {
    if (value === null) {
    const nextStep = board.map((el, i) => (i === index) ? symbol : el);
    setSymbol(symbol === "X" ? "0" : "X");
    setBoard(nextStep);
    }
  }

  const checkWinner = () => {
    const winnerLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i = 0; i < winnerLines.length; i++){
      const [a, b, c] = winnerLines[i];
      if(board[a] && board[a] === board[b] && board[b] === board[c]){
        setWinner(board[a])
        if (board[a] === 'X') {
          const newScore = {...score, 'X' : score['X'] + 1}
          setScore(newScore)
        } else {
          const newScore = {...score, '0' : score['0'] + 1}
          setScore(newScore)
        }
      }
    }
  }

  const restart = () => {
    setBoard(board.map(el =>  null))
    setWinner(null)
    setSymbol("X")
  }

  useEffect(() => {
    checkWinner()
  }, [board])

  useEffect(() => {
    if (winner !== null) {
      setTimeout(() => {
        restart()
        console.log('hi')
      }, 2000)
    }
  }, [winner])

  return (
    <div className="App">
      <h1 className="h1">TIC TAC TOE</h1>
        <Board board={board}
               move={move}
               winner={winner}
        />

      { winner && <h3>Congratulations: {winner} has won!</h3> }

      <div className="x"> X : {score['X']}</div>
      <div className="o"> 0 : {score['0']}</div>

    </div>
  );
}

export default App;
