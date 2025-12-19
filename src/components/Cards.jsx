import React from "react";

const Cards = ({ data }) => {
  return (
    <div className="cards group rounded-2xl border-b border-x border-white shadow-2xl 
                    transition-all duration-300 ease-in-out 
                    hover:shadow-2xl 
                    max-w-xs mx-auto">

      <div className="overflow-hidden object-cover rounded-t-2xl">
        <img
          className="w-full h-48 md:h-56 lg:h-64 object-cover
                     transition-transform duration-700 ease-out
                     group-hover:scale-110"
          src={data.image}
          alt={data.title}
        />
      </div>

      <div className="text-center py-2 px-2">
        <h3 className="py-1 text-sm md:text-base font-medium">
          {data.title}
        </h3>
        <p className="text-sm md:text-base">
          Rating: {data.rating}
        </p>
      </div>

    </div>
  );
};

export default Cards;
