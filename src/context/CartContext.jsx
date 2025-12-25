import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    const MAX_QTY = 10;
    const existing = cartItems.find(item => item.id === product.id);

    if (existing) {
      if (existing.qty >= MAX_QTY) {
        return { success: false, message: "Max 10 items allowed" };
      }

      setCartItems(
        cartItems.map(item =>
          item.id === product.id
            ? { ...item, qty: Math.min(item.qty + quantity, MAX_QTY) }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: quantity }]);
    }

    return { success: true, message: "Added to cart" };
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
