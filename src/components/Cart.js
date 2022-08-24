import "../css/cart.css";
import { useState } from "react";

function Cart({ cart, updateCart }) {
  const [deployCart, setDeployCart] = useState(true);
  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );
  return deployCart ? (
    <div className="cart_style">
      <h2>Panier :</h2>
      <button className="deploy_cart" onClick={() => setDeployCart(false)}>
        ↑
      </button>
      {cart.map(({ name, price, amount }, index) => (
        <div key={`${name}-${index}`}>
          🌻 {name[0].toUpperCase() + name.slice(1)} - {price} € x {amount}
        </div>
      ))}
      <p>Total = {total} Euros</p>
      <button className="reset_cart" onClick={() => updateCart([])}>
        Vider le panier
      </button>
    </div>
  ) : (
    <div className="cart_style">
      <h2>Panier :</h2>
      <button className="deploy_cart" onClick={() => setDeployCart(true)}>
        ↓
      </button>
    </div>
  );
}

export default Cart;
