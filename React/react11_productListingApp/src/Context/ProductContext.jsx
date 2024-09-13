import { createContext, useState } from "react";
import { PropTypes } from "prop-types";
import { products } from "../Data/ProductData";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [Products, setProducts] = useState(products);
  const [isFastDeliveryOnly, setIsFastDeliveryOnly] = useState(false);

  const handleSearchProduct = (term) => {
    setProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  const handleSortProductList = (event) => {
    const value = event.target.value;
    let sortedList = [...products]; // Copy the products array to avoid mutating the original
    if (value === "highToLow") {
      sortedList.sort((a, b) => b.price - a.price); // High to Low
    } else if (value === "lowToHigh") {
      sortedList.sort((a, b) => a.price - b.price); // Low to High
    }

    setProducts(sortedList); // Update the sorted products list
  };

  const handleFastDeliveryOnly = (event) => {
    setIsFastDeliveryOnly(event.target.checked);

    if (event.target.checked) {
      const fastDeliveryProducts = products.filter((p) => p.deliveryTime <= 3);
      setProducts(fastDeliveryProducts);
    } else {
      setProducts(products); // Reset to all products when unchecked
    }
  };

  return (
    <ProductContext.Provider
      value={{
        Products,
        handleSearchProduct,
        handleSortProductList,
        handleFastDeliveryOnly,
        isFastDeliveryOnly
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
