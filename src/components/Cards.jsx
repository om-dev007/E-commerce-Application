import React from "react";

const Cards = ({ data }) => {
    console.log(data);

    return (
        <div className="cards rounded-2xl py-2 border border-gray-300 bg-white transition-all duration-300 ease-in-out hover:translate-y-2 hover:shadow-2xl">
            <div className="object-contain">
                <img
                    className="w-50 h-50 rounded-2xl object-contain "
                    src={data.image}
                    alt={data.title}
                />
            </div>
            <div className="text-center py-1">
                <h3 className="py-1">{data.title}</h3>
                <p>Rating: {data.rating}</p>
            </div>
        </div>
    );
};

export default Cards;
