import React from 'react';

function Score(props) {
  return (
    <div className="score">
      <div className="best-score score-tag">Best score: {props.bestScore}</div>
      <div className="current-score score-tag">
        Current score: {props.currentScore}
      </div>
    </div>
  );
}

export default Score;
