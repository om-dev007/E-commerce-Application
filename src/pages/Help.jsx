import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Help = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-linear-to-b from-green-50 to-white px-4 sm:px-6 md:px-16 lg:px-24 py-16">
        
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700">
            Help & Support
          </h1>
          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            Find answers to common questions about using Velnixa
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">

          <div className="bg-white rounded-2xl hover:-translate-y-2 transition-all shadow-md p-6 sm:p-8 border border-gray-400">
            <h3 className="text-lg sm:text-xl font-semibold text-green-700 mb-4">
              How to Use Velnixa
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Browse products by category, view product details, and add items
              to your cart. The website is designed to be simple and easy to
              navigate across all devices.
            </p>
          </div>

          <div className="bg-white rounded-2xl hover:-translate-y-2 transition-all shadow-md p-6 sm:p-8 border border-gray-400">
            <h3 className="text-lg sm:text-xl font-semibold text-green-700 mb-4">
              Orders & Checkout
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Order placement and secure checkout features will be added as the
              project evolves into a full-stack application. Currently, this
              section demonstrates the frontend flow.
            </p>
          </div>

          <div className="bg-white rounded-2xl hover:-translate-y-2 transition-all shadow-md p-6 sm:p-8 border border-gray-400">
            <h3 className="text-lg sm:text-xl font-semibold text-green-700 mb-4">
              Account & Authentication
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              User authentication, order history, and profile management
              features are planned for future updates when backend
              functionality is integrated.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md hover:-translate-y-2 transition-all p-6 sm:p-8 border border-gray-400">
            <h3 className="text-lg sm:text-xl font-semibold text-green-700 mb-4">
              Support & Feedback
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              If you face any issues or have suggestions, feel free to share
              feedback. This project is continuously improving based on
              learning and experimentation.
            </p>
          </div>

        </div>

        <div className="mt-16 text-center text-gray-500 text-xs sm:text-sm max-w-2xl mx-auto">
          Velnixa is a learning-focused project. Support features will expand as
          the platform grows into a full-scale e-commerce application.
        </div>

      </div>

      <Footer />
    </>
  );
};

export default Help;
