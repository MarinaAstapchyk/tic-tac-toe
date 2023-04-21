import './App.css';
import {useState} from "react";
import Board from "./components/Board";

function App() {
  const [game, setGame] = useState(new Array(9).fill(null));
  const [symbol, setSymbol] = useState("X");
  const move = (value, index) => {
    if (value === null) {
    const newGame = game.map((el, i) => (i === index) ? symbol : el);
    setSymbol(symbol === "X" ? "0" : "X");
    setGame(newGame);
    }
  }

  return (
    <div className="App">
      <h1 className="h1">Tic Tac Toe</h1>

      <div>
        <Board game={game}
               setGame={setGame}
               move={move}
        />
      </div>

    </div>
  );
}

export default App;
