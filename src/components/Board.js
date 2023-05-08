import React from 'react';
import Square from "./Square";


function Board (props) {
  const { board, move, winner } = props;

  return (
    <div className="board">
      {board.map((el, index) =>
        <Square value={el}
                move={move}
                index={index}
                winner={winner}
        />)}
    </div>
 );
}

export default Board;