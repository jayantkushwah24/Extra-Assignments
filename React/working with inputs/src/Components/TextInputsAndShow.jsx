import { useState } from "react";

function TextInputsAndShow() {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <form action="">
        <label htmlFor="">
          Whatever you are going to type in the input field, that text will be
          shown simultaneously below.
        </label>
        <br />
        <input
          type="text"
          placeholder="Type Something..."
          onChange={handleChange}
        />
        {/* <input type="text" placeholder="Type Something..." onChange={ (e) => setText(e.target.value)} /> */}
      </form>
      <p>{text}</p>
    </>
  );
}
export default TextInputsAndShow;
