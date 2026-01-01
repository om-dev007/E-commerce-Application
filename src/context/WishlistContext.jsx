import { createContext, useEffect, useState } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    return JSON.parse(localStorage.getItem("wishlist")) || [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.find(
        (item) => item.id === product.id && item.size === product.size
      );

      if (exists) return prev; 

      return [...prev, product];
    });
  };

  const removeFromWishlist = (id, size) => {
    setWishlist((prev) =>
      prev.filter((item) => !(item.id === id && item.size === size))
    );
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};