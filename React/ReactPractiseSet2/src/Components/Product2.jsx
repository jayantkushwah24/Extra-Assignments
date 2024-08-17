// 2. Build a Product component that receives product name and price as props and displays them on DOM.
// The name should be in bold and blue in color
// Price should be in italics and green in color

export function Product({name , price}) {
  return(
    <>
     <p style={{color : "blue"}}> <b>{name}</b> </p>
     <p style={{color : "green"}}> <i>{price}</i> </p>
    </>
  )
}