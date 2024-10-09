import React from 'react'
import { useState } from 'react'
import useTicTacToe from '../hooks/useTicTacToe'



export const TicTacToe = () => {

    const {board, resetGame, getStatusMessage, handleClick} = useTicTacToe()
  
    

  return (
    <div className="game">
      <div className="status">
        {getStatusMessage()}
        <button className="reset-btn" onClick={resetGame}>Reset Game</button>
      </div>
      <div className="board">
        {board.map((_, index) => {
          return <button 
          className="cell" 
          key={index} 
          onClick={() => handleClick(index)}
          disabled={board[index] !== null}
          >
            {board[index]}
          </button>
        })}
      </div>
    </div>
  )
}
