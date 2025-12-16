import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-linear-to-b from-green-50 to-white flex items-center justify-center px-4">
        
        <div className="bg-white rounded-2xl shadow-md border-2 border-gray-400 hover:-translate-y-3 transition-all p-8 sm:p-12 max-w-md w-full text-center">
          
          <div className="flex justify-center mb-6 text-green-600">
            <ShoppingCart className="h-12 w-12" />
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-600 mb-3">
            Cart is Under Development
          </h1>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
            The cart functionality is currently being built. Soon, you’ll be
            able to add products, manage quantities, and proceed to checkout.
          </p>

          <NavLink
            to="/"
            className="inline-block px-6 py-2 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition-all"
          >
            Continue Shopping
          </NavLink>

          <p className="mt-4 text-xs text-gray-400">
            This feature will be available in a future update.
          </p>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
