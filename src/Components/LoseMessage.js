import React from 'react';

export default function LoseMessage(props) {
  return (
    <div className="overlay message">
      <div className="message-card lose">
        <div>
          <p>You Lose</p>
        </div>
        <button onClick={props.click}>Play Again</button>
      </div>
    </div>
  );
}
