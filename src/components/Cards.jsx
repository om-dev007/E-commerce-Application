import React from "react";

const Cards = ({ data }) => {
  return (
    <div
      className="
        cards group rounded-2xl
        bg-[#1f2f2b] shadow-[0_12px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_28px_50px_rgba(0,0,0,0.8)] transition-all duration-300 ease-in-out hover:-translate-y-2 max-w-xs mx-auto
      "
    >
      {/* IMAGE */}
      <div className="overflow-hidden rounded-t-2xl">
        <img
          className="
            w-full h-48 md:h-56 lg:h-64 object-cover
            transition-transform duration-700 ease-out
            group-hover:scale-110
          "
          src={data.image}
          alt={data.title}
        />
      </div>

      {/* CONTENT */}
      <div className="text-center py-3 px-3 text-[#e6e3dc]">
        <h3 className="py-1 text-sm md:text-base font-semibold">
          {data.title}
        </h3>
        <p className="text-sm md:text-base text-[#c9c5bb]">
          Rating: {data.rating}
        </p>
      </div>
    </div>
  );
};

export default Cards;
