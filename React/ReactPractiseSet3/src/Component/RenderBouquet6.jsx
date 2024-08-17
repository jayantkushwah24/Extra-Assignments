// 6. Build a React component which takes an array of objects as props. The object represents a
// bouquet of mixed flowers and consists of: id, flowers, totalFlowers, and price. Display the price
// of that bouquet on the DOM that has rose in it, in the
// format, “Price of bouquet with roses : {price}”

export function RenderBouquet({bouquet}) {
  
  return(
    <>
      {
        bouquet.map( ({id,flowers,totalFlowers,price}) => (
          <div>
            {
              flowers.map( (flower) => flower == "rose" ? <p>Price of bouquet with roses : {price}</p> : <p></p> )
            }
          </div>
        ))
      }
    </>
  )
}