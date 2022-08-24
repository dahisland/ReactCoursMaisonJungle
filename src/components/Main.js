import Cart from "./Cart.js";
import ShoppingContent from "./ShoppingContent.js";
import "../css/main.css";
import { useState } from "react";

function Main() {
  const [cart, updateCart] = useState([]);
  return (
    <main>
      <Cart cart={cart} updateCart={updateCart} />
      <ShoppingContent cart={cart} updateCart={updateCart} />
    </main>
  );
}

export default Main;
