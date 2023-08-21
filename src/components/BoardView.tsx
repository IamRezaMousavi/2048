import React, { useState } from 'react';
import Tile from './Tile';
import Cell from './Cell';
import { Board } from '../helper';
import useEvent from '../hooks/useEvent';
import GameOverlay from './GameOverlay';
import useSwipe from '../hooks/useSwipe';

const BoardView: React.FC = () => {
  const [board, setBoard] = useState<Board>(new Board());

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.keyCode >= 37 && event.keyCode <= 40) {
      const direction = event.keyCode - 37;
      const boardClone = board.clone();
      const newBoard = boardClone.move(direction);
      setBoard(newBoard);
    }
  };

  useEvent('keydown', handleKeyDown);

  const onSwipedLeft = () => {
    if (board.hasWon())
      return;
    const boardClone = board.clone();
    const newBoard = boardClone.move(2);
    setBoard(newBoard);
  };

  const onSwipedRight = () => {
    if (board.hasWon())
      return;
    const boardClone = board.clone();
    const newBoard = boardClone.move(0);
    setBoard(newBoard);
  };

  const onSwipedUp = () => {
    if (board.hasWon())
      return;
    const boardClone = board.clone();
    const newBoard = boardClone.move(3);
    setBoard(newBoard);
  };

  const onSwipedDown = () => {
    if (board.hasWon())
      return;
    const boardClone = board.clone();
    const newBoard = boardClone.move(1);
    setBoard(newBoard);
  };

  useSwipe({
    left: onSwipedLeft,
    right: onSwipedRight,
    up: onSwipedUp,
    down: onSwipedDown
  });

  const cells = board.cells.map((row, rowIndex) => {
    return (
      <div key={rowIndex}>
        {row.map((_, colIndex) => {
          return <Cell key={rowIndex * board.size + colIndex} />;
        })}
      </div>
    )
  });

  const tiles = board.tiles.filter((tile) => tile.value !== 0).map((tile, index) => {
    return <Tile tile={tile} key={index} />;
  })

  const resetGame = () => {
    setBoard(new Board());
  }

  return (
    <div>
      <div className="details-box">
        <div className="resetButton" onClick={resetGame}>New Game</div>
        <div className="score-box">
          <div className="score-header">SCORE</div>
          <div>{board.score}</div>
        </div>
      </div>
      <div className="board">
        {cells}
        {tiles}
        <GameOverlay onRestart={resetGame} board={board} />
      </div>
    </div>
  )
}

export default BoardView;