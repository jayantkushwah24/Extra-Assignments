// 5. Build a React component called Phones that receives an array of products as a prop. Display
// only the mobile phones as an unordered list. Display their name, description, and price on the DOM

export function Phones({arr}) {
  
  return (
    <>
      {arr.map( ({id,name,description,price}) => (
        <ul key={id}>
          <li>Name : {name}, Description : {description}, Price : {price}</li>
        </ul>
      ))}
    </>
  )
}