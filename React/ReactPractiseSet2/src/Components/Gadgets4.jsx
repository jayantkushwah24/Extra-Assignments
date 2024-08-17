// 4. Build a React component called Gadgets that receives an array of products as a prop. Render
// each product's name, description, and price as an ordered list. Add a border around the product
// details which has price above 50000.

export function Gadgets({productArray}) {
  
  return(
    <>
      {
        productArray.map( ({id,name,description,price}) => (
          <ol key={id} style={{border : price > 50000 ? "2px solid black" : "none"}}>
            <li>{name} , {description} , {price}</li>
          </ol>
        ))
      }
    </>
  )
}