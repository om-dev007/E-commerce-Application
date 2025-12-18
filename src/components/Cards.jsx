import React from "react";

const Cards = ({ data }) => {
    return (
        <div className="cards rounded-2xl border-b border-x  border-white shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl max-w-xs mx-auto">
            <div className="object-cover overflow-hidden">
                <img
                    className="w-full h-48 rounded-t-2xl md:h-56 lg:h-64 overflow-hidden object-cover"
                    src={data.image}
                    alt={data.title}
                />
            </div>
            <div className="text-center py-2 px-2">
                <h3 className="py-1 text-sm md:text-base font-medium">{data.title}</h3>
                <p className="text-sm md:text-base">Rating: {data.rating}</p>
            </div>
        </div>
    );
};

export default Cards;
