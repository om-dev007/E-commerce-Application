// pages/Cart.jsx
// Is page me koi API nahi hoti
// Data Zustand store se milta hai

import { useCart } from "../store/cartStore"

function Cart() {
  const { cart, removeFromCart } = useCart()

  return (
    <div>
      <h1>Your Cart</h1>

      {cart.map((item) => (
        <div key={item.id}>
          <img src={item.image} />
          <h3>{item.title}</h3>
          <p>${item.price}</p>

          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
          
        </div>
      ))}
    </div>
  )
}

export default Cart
