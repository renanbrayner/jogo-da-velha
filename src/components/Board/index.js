import React from 'react';
import Square from '../Square';

import './styles.css'

function Board({squareHandleClick, squares}) {
  return (
    <div className="Board">
      {squares.map((square, i) => (
          <Square key={i} squareValue={square} squareHandleClick={() => squareHandleClick(i)} />
      ))}
    </div>
  );
}

export default Board;