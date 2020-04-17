import React, { useState } from 'react';
import { calculateWinner } from '../../helpers';
import Board from '../Board';

import './styles.css'

function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(board);

  function handleClick(i) {
    const boardCopy = [...board];
    // If user click on occupied square or if game is won, return
    if (winner || boardCopy[i]) return;
    //Put an X or an O in the clicked square
    boardCopy[i] = xIsNext ? 'X' : 'O';
    setBoard(boardCopy);
    setXisNext(!xIsNext)
  }

  function jumpTo() {

  }

  function renderMoves() {
    return (
      <button className='start-button' onClick={() => setBoard(Array(9).fill(null))}> 
        Jogar Novamente 
      </button>
    )
  }

  return (
    <>
      <div className='text-wrapper'>
        {renderMoves()}
        <p>{winner ? `Vencedor: ${winner}` : `Vez de: ${xIsNext ? 'X' : 'O'}`}</p>
      </div>
      <Board squares={board} squareHandleClick={handleClick} />
    </>
  );
}

export default Game;