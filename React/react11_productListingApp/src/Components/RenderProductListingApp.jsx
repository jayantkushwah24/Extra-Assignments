import { useContext, useState } from "react";
import { RenderData } from "./RenderData";
import { ProductContext } from "../Context/ProductContext";

export function RenderProductListingApp() {
  const {
    handleSearchProduct,
    handleSortProductList,
    handleFastDeliveryOnly,
    isFastDeliveryOnly,
  } = useContext(ProductContext);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSetSearchTerm = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    handleSearchProduct(value);
  };

  return (
    <>
      <label>Search</label>
      <input type="text" onChange={handleSetSearchTerm} value={searchTerm} />
      <button onClick={handleSetSearchTerm} value={searchTerm}>
        Search Data
      </button>
      <div
        style={{
          border: "2px solid black",
          width: "max-content",
          margin: "7px 0px",
        }}
      >
        Sort By
        <br />
        <input
          type="radio"
          name="sortPrice"
          value="highToLow"
          onClick={handleSortProductList}
        />
        <label>Price - High to Low</label>
        <input
          type="radio"
          name="sortPrice"
          value="lowToHigh"
          onClick={handleSortProductList}
        />
        <label>Price - Low to High</label>
      </div>
      <div
        style={{
          border: "2px solid black",
          width: "max-content",
          margin: "7px 0px",
        }}
      >
        Filters
        <br />
        <input type="checkbox" />
        <label>Include Out Of Stock</label>
        <input
          type="checkbox"
          checked={isFastDeliveryOnly}
          onChange={handleFastDeliveryOnly}
        />
        <label>Fast Delivery Only</label>
      </div>
      <RenderData />
    </>
  );
}
