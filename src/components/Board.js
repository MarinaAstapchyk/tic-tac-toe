import React from 'react';
import Square from "./Square";


function Board (props) {
  const { game, move } = props;

  return (
    <div className="board">
      {game.map((el, index) =>
        <Square value={el}
                move={move}
                index={index}
        />)}
    </div>
 );
}

export default Board;