import { createContext } from "react";
import {PropTypes} from 'prop-types'

export const ProductContext = createContext();

export function ProductProvider({children}){

  return <ProductContext.Provider value={{}} >
    {children}
  </ProductContext.Provider>
}

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
}