import React from 'react';


const Square = (props) => {
  const { value, move, index } = props;

  return (
    <button className="square" onClick={() => move(value, index)}>
      {value}
    </button>
  );
};

export default Square;