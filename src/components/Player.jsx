import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const enteredPlayeName = useRef();
  const [playerName, setPlayerName] = useState("unknown entity");

  function handleClick() {
    setPlayerName(enteredPlayeName.current.value);
    enteredPlayeName.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input type="text" ref={enteredPlayeName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
