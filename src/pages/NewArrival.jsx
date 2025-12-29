import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from "../components/Cards";

import { menData, womenData, kidsData } from "../store/data";

const NewArrival = () => {
    const newArrivals = [
        ...menData.slice(-3),
        ...womenData.slice(-3),
        ...kidsData.slice(-3),
    ];

    return (
        <>
            <Navbar />

            <section className="bg-[#FAF8F5] px-5 sm:px-10 md:px-16 py-10 sm:py-14">

                <div className="text-center mb-10">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1F3D2B]">
                        New Arrivals
                    </h1>
                    <p className="mt-2 text-gray-600 text-sm sm:text-base">
                        Fresh styles just landed at Velnixa
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                    {newArrivals.map((item) => (
                        <Link
                            key={item.id}
                            to={`/product/${item.id}`}
                        >
                            <Cards data={item} />
                        </Link>
                    ))}
                </div>

            </section>

            <Footer />
        </>
    );
};

export default NewArrival;
