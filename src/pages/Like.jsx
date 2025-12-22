import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Heart } from "lucide-react";
import { NavLink } from "react-router-dom";

const Like = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-linear-to-b from-green-50 to-white flex items-center justify-center px-4">

        <div className="
          bg-white rounded-2xl shadow-xl border border-black/5 p-8 sm:p-10 max-w-md w-full text-center transition-all ">

          <div className="flex justify-center mb-6 text-[#2F6B4F]">
            <div className="bg-[#E6EFEA] p-4 rounded-full">
              <Heart className="h-12 w-12" />
            </div>

          </div>

          <h1 className="text-2xl sm:text-3xl font-semibold text-[#1F3D2B] mb-3">
            Your Wishlist
          </h1>

          <p className="text-[#4B5B52] text-sm sm:text-base leading-relaxed mb-6">
            Wishlist functionality is currently under development.
            Soon, you’ll be able to save your favorite products and
            access them anytime.
          </p>

          <NavLink
            to="/"
            className="inline-block px-7 py-3 rounded-full bg-[#2F6B4F] text-white font-medium hover:bg-[#24563F] transition-all "
          >
            Explore Products
          </NavLink>

          <p className="mt-5 text-xs text-gray-400">
            This feature will be available in a future update.
          </p>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Like;
