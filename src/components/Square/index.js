import React from 'react';
import './styles.css'

function Square({squareHandleClick, squareValue}) {
  return (
    <button className='Square' onClick={squareHandleClick}>
      {squareValue}
    </button>
  );
}

export default Square;