import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-[80vh] bg-linear-to-b from-green-50 to-white flex items-center justify-center px-4">

        <div className="bg-white rounded-2xl shadow-xl border border-black/5 p-8 sm:p-12 max-w-md w-full text-center">
          
          <div className="flex justify-center mb-6">
            <div className="bg-[#E6EFEA] p-4 rounded-full">
              <ShoppingCart className="h-10 w-10 text-[#1F3D2B]" />
            </div>
          </div>

          <h1 className="text-2xl sm:text-3xl font-semibold text-[#1F3D2B] mb-3">
            Cart is Under Development
          </h1>

          <p className="text-[#6B7C72] text-sm sm:text-base leading-relaxed mb-6">
            We're currently building the cart experience. Soon you'll be able to
            add products, manage quantities, and proceed to checkout.
          </p>

          <NavLink
            to="/"
            className="inline-block px-7 py-3 rounded-lg bg-[#2F6B4F] text-white font-medium hover:bg-[#24563F] transition-all"
          >
            Continue Shopping
          </NavLink>

          <p className="mt-4 text-xs text-[#9AA8A0]">
            This feature will be available in a future update.
          </p>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
