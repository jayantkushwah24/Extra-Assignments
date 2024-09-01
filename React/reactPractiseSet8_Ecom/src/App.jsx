import "./App.css";
import { RenderEcommerceApp } from "./Components/RenderEcommerce1";
import { CartProvider, CartContext } from "./Context/CartContext";
export { CartContext };

function App() {
  return (
    <>
      <CartProvider>
        <RenderEcommerceApp />
      </CartProvider>
    </>
  );
}

export default App;
