// 6. Build a React component called Article that accepts two props: title and content. Inside the
// component, render a <h1> tag with the title prop and a button below that which says “Know
// More”. On the click of the button, show the content in a <p> tag just below the button.
import { useState } from "react";

export function Article({title,content}) {
  const [show , setShow ] = useState(false);
  const showContent = () => {
    setShow(!show);
  }
  return(
    <>
      <h1>{title}</h1>
      <button onClick={showContent}>Know More</button>
      {show == true ? <p>{content}</p> : <p></p> }
    </>
  )
}