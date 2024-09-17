import {useState, useRef} from "react";

export default function Player() {
  const playerName = useRef(null);

  const [enteredPlayerName, setEnteredPlayerName] = useState('');

  const handlePlayerNameSubmitOnClick = () => {
    setEnteredPlayerName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ? enteredPlayerName : 'unknown player'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handlePlayerNameSubmitOnClick}>Set Name</button>
      </p>
    </section>
  );
}
