import { products } from "../Data/ProductData";
import { RenderData } from "./RenderData";

export function RenderProductListingApp() {
  const handleSearch = () => {
    products.find
  }
  return (
    <>
      <label>Search</label>
      <input type="search" onChange={handleSearch} />
      <button>Search Data</button>
      <div style={{ border: "2px solid black" , width:"max-content" , margin:"7px 0px"}}>
        Sort By
        <br />
        <input type="radio" name="sortPrice" value="highToLow"  />
        <label>Price - High to Low</label>
        <input type="radio" name="sortPrice" value="lowToHigh" />
        <label>Price - Low to High</label>
      </div>
      <div style={{ border: "2px solid black" , width:"max-content" , margin:"7px 0px"}}>
        Filters
        <br />
        <input type="checkbox" />
        <label>Include Out Of Stock</label>
        <input type="checkbox" />
        <label>Fast Delivery Only</label>
      </div>
      <RenderData />
    </>
  );
}
