import React from "react";
import Cards from "../components/Cards";
import { data } from "../store/data";
import { Link } from "react-router-dom";

const Popular = () => {
    return (
        <div className="py-10 px-5 sm:px-10 bg-[#F5F1EB] ">
            <div className=" text-center">
                <h1 className="text-3xl text-gray-800">TRENDING NOW</h1>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-5 py-10 px-8 sm:px-10 md:px-16 lg:px-20">
                {data.map((item) => (
                    <Link key={item.id} to={`/product/${item.id}`}>
                        <Cards data={item} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Popular;
