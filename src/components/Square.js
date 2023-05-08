import React from 'react';


const Square = (props) => {
  const { value, move, index, winner } = props;

  return (
    <button className="square" disabled={winner}
            onClick={() => move(value, index)}>
      {value}
    </button>
  );
};

export default Square;