import React from "react";

const Cards = ({ data }) => {
  return (
    <div className="group w-full rounded-2xl bg-transparent transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.08)]
">

      <div className="aspect-6/5 overflow-hidden rounded-t-2xl">
        <picture>
          <source
            media="(min-width: 768px)"
            srcSet={data.image.desktop}
          />
          <img
            loading="lazy"
            src={data.image.mobile}
            alt={data.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </picture>

      </div>

      <div className="text-center py-3 px-3 text-gray-900">
        <h3 className="py-1 text-sm md:text-base font-semibold line-clamp-2">
          {data.title}
        </h3>
        <p className="text-sm md:text-base text-gray-500">
          Rating: {data.rating}
        </p>
      </div>
    </div>
  );
};


export default Cards;
