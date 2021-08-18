import React, { useEffect, useState } from 'react';
import pokeArr from './Components/images';
import Card from './Components/Card';
import Header from './Components/Header';
import Score from './Components/Score';
import shuffle from './Components/shuffle';
import WinMessage from './Components/WinMessage';
import LoseMessage from './Components/LoseMessage';
import './styles/app.css';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [pokemon, setPokemon] = useState(pokeArr);
  const [win, setWin] = useState(false);
  const [lose, setLose] = useState(false);

  useEffect(() => {
    setPokemon(shuffle(pokemon));
  }, [score]);

  const handleClick = (id) => {
    const clicked = pokemon.filter((x) => {
      return x.id === id && x.isClicked === false;
    });
    console.log(clicked);
    if (clicked.length === 0) {
      if (score > bestScore) {
        setBestScore(score);
      }
      setLose(true);
      return;
    } else {
      setScore(score + 1);
    }
    setPokemon(
      pokemon.map((x) => {
        if (x.id === id) {
          return { ...x, isClicked: true };
        }
        return x;
      })
    );
    if (score === 12) {
      setWin(true);
    }
  };

  const handlePlayAgain = () => {
    setWin(false);
    setLose(false);
    setScore(0);
    setPokemon(
      pokemon.map((x) => {
        return { ...x, isClicked: false };
      })
    );
  };

  const arr = shuffle(pokemon).map((x) => {
    return (
      <Card
        key={x.id}
        name={x.name}
        src={x.src}
        id={x.id}
        click={() => handleClick(x.id)}
      />
    );
  });

  return (
    <div>
      {win && <WinMessage click={handlePlayAgain} />}
      {lose && <LoseMessage click={handlePlayAgain} />}
      <Header />
      <Score currentScore={score} bestScore={bestScore} />
      <div className="container">{arr}</div>
    </div>
  );
}

export default App;
