import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Offices = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-linear-to-b from-green-50 to-white px-4 sm:px-6 md:px-16 lg:px-24 py-16">

        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-700">
            Offices & Workspaces
          </h1>
          <p className="mt-4 text-gray-600 text-base sm:text-lg">
            How and where Velnixa is being built
          </p>
        </div>

        <div className="mt-14 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

          <div className="bg-white rounded-2xl shadow-md border border-gray-400 hover:-translate-y-3 transition-all p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-semibold text-green-700 mb-4">
              Remote Development Office
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Velnixa is currently developed and maintained as a remote-based
              project. All development, design, and planning are carried out
              through a flexible remote workflow.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md border border-gray-400 hover:-translate-y-3 transition-all p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-semibold text-green-700 mb-4">
              Planned Physical Offices
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              As the platform evolves into a full-stack and production-ready
              e-commerce application, physical office locations and dedicated
              workspaces may be introduced to support future growth.
            </p>
          </div>

        </div>

        <div className="mt-16 text-center text-gray-500 text-xs sm:text-sm max-w-2xl mx-auto">
          Velnixa is an evolving project focused on learning, scalability,
          and real-world implementation of modern web technologies.
        </div>

      </div>

      <Footer />
    </>
  );
};

export default Offices;
