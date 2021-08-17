import React from 'react';

function Card(props) {
  return (
    <div className="card" onClick={props.click} id={props.id}>
      <div>
        <img src={props.src} alt={props.name} />
      </div>
      <div>
        <p>{props.name}</p>
      </div>
    </div>
  );
}

export default Card;
