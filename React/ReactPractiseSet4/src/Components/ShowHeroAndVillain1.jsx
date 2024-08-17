// 1. Given an array of characters, build a Tab component in React that shows the name of
// characters on click of two buttons, one for heroes and other for villains. On click of “Show
// Heroes” button, a list of heroes should be displayed and on click of “Show Villains” button, a list
// of villains should be displayed on the DOM. Use useState Hook.

import { useState } from "react";
import { characters } from "../Data/Characters1";

export function RenderHeroAndVillain() {
  const { heroes, villains } = characters;
  const [renderHero, setRenderHero] = useState(false);
  const [renderVillains, setRenderVillain] = useState(false);

  const handleHero = () => {
    setRenderHero(!renderHero);
  };
  const handleVillain = () => {
    setRenderVillain(!renderVillains);
  };

  return (
    <>
      <div className="heros">
        <button onClick={handleHero}>Show Heros</button>
        <div>
          {renderHero && (
            <>
              <h1>Heros</h1>
              {heroes.map(({ name, powers, costume }) => (
                <>
                  <h2>{name}</h2>
                  <p>Powers : {powers}</p>
                  <p>Costume : {costume}</p>
                </>
              ))}
            </>
          )}
        </div>
      </div>
      <hr />
      <div className="villains">
        <button onClick={handleVillain}>Show Villains</button>
        <div>
          {renderVillains && (
            <>
              <h1>Villains</h1>
              {villains.map(({ name, powers, costume }) => (
                <>
                  <h2>{name}</h2>
                  <p>Powers : {powers}</p>
                  <p>Costume : {costume}</p>
                </>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
