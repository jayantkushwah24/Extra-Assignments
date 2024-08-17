// 2. Build a React component with two buttons + and - which increases/decreases the font size of a
// heading text “Welcome” by 1px. Keep the initial font size to 18px. Use useState Hook.

import { useState } from "react";

export function ChangeFontSize() {
  const [fontSize, setFontSize] = useState(18);

  const increaseFontSize = () => {
    setFontSize(fontSize + 1);
  };
  const decreaseFontSize = () => {
    setFontSize(fontSize - 1);
  };

  return (
    <>
      <h1 style={{ fontSize: fontSize }}>Jayant</h1>
      <button onClick={increaseFontSize}>+</button>
      <button onClick={decreaseFontSize}>-</button>
    </>
  );
}
