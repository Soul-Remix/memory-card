import React from 'react';
import pokeArr from './Components/images';
import Card from './Components/Card';
import Header from './Components/Header';
import Score from './Components/Score';
import './styles/app.css';

function App() {
  const arr = pokeArr.map((x) => {
    return <Card key={x.id} name={x.name} src={x.src} />;
  });
  return (
    <div>
      <Header />
      <Score />
      <div className="container">{arr}</div>
    </div>
  );
}

export default App;
