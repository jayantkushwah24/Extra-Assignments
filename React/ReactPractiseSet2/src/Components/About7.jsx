// 7. Build a React component called About that accepts three props: heading, your name and
// learning. Inside the component, render a <h1> tag with the heading prop, <h2> tag with your
// name and a button below that which says “Know More”. On the click of the button, show the
// learning in a <p> tag just below the button.

import { useState } from "react"

export function About({heading,name,learning}) {

  const [show,setShow] = useState(false);
  const showDetails = () =>{
    setShow(!show);
  }
  
  return(
    <>
      <h1>{heading}</h1>
      <h2>{name}</h2>
      <button onClick={showDetails}>Know More</button>
      {show == true ? <p>{learning}</p> : <p></p> }
    </>
  )
}