// 7. Build a game component in React where the player has a certain number of lives. Display the
// current number of lives and allows the player to decrement the number of lives by one with a
// button click. Once the number of lives reaches zero, display a "Game Over" message

import { useState } from "react";

export function RenderLife() {
  const [lifeCount, setLifeCount] = useState(3);
  const decreaseLife = () => {
    setLifeCount((prevLifeCount) => prevLifeCount - 1);
  };
  return (
    <>
      <h1>Current Life: {lifeCount}</h1>
      {lifeCount > 0 ? (
        <button onClick={decreaseLife}>Lose a life</button>
      ) : (
        <h2>Game Over</h2>
      )}
    </>
  );
}
