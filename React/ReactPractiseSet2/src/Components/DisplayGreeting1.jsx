// 1. Create a React component called Greeting that receives a name prop and displays a message
// like "Hello, name!" on the DOM.

export function Greeting({name}){

  return (
    <>
      <p>Hello, {name}!</p>
    </>
  )
}