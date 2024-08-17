// 9. Build a React component called "ColorPicker" that displays a list of colors as buttons. On click of
// each button show the HEX code for that color, just below each button.


import { useState } from "react";

export function ColorPicker({ colors }) {
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  return (
    <>
      {colors.map((color) => (
        <div key={color.hex}>
          <button
            onClick={() => handleColorClick(color.hex)}
            style={{ backgroundColor: color.name }}
          >
            {color.name.charAt(0).toUpperCase() + color.name.slice(1)}
          </button>
          <p>Hexa Code: {selectedColor === color.hex ? color.hex : ""}</p>
        </div>
      ))}
    </>
  );
}



// import { useState } from "react";

// export function ColorPicker({ red, blue, green }) {
//   const [redHexaCode, setRedHexaCode] = useState("");
//   const [blueHexaCode, setBlueHexaCode] = useState("");
//   const [greeenHexaCode, setGreenHexaCode] = useState("");

//   const handleColorRed = () => {
//     setRedHexaCode(red);
//   };
//   const handleColorBlue = () => {
//     setBlueHexaCode(blue);
//   };
//   const handleColorGreen = () => {
//     setGreenHexaCode(green);
//   };

//   return (
//     <>
//       <button onClick={handleColorRed} style={{ backgroundColor: "red" }}>
//         {" "}
//         Red{" "}
//       </button>
//       <p>Hexa Code : {redHexaCode}</p>

//       <button onClick={handleColorBlue} style={{ backgroundColor: "blue" }}>
//         {" "}
//         Blue{" "}
//       </button>
//       <p>Hexa Code : {blueHexaCode}</p>

//       <button onClick={handleColorGreen} style={{ backgroundColor: "green" }}>
//         {" "}
//         Green{" "}
//       </button>
//       <p>Hexa Code : {greeenHexaCode}</p>
//     </>
//   );
// }
