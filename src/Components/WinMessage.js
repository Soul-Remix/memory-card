import React from 'react';

export default function WinMessage(props) {
  return (
    <div className="overlay message">
      <div className="message-card win">
        <div>
          <p>You Win</p>
        </div>
        <button onClick={props.click}>Play Again</button>
      </div>
    </div>
  );
}
