import React from "react";
import Cards from "../components/Cards";
import { data } from "../store/data";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Popular = () => {
    return (
        <div className="py-10 px-5 sm:px-10 ">
            <div className=" text-center">
                <h1 className="text-3xl text-gray-800">TRENDING NOW</h1>
            </div>

            <div className="popular-swiper-wrapper sm:hidden block py-10 px-10">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    loop={true}
                    grabCursor={true}
                    speed={1000}
                    className="popular-swiper"
                >
                    {data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="flex flex-col h-full">
                                <Link to={`/product/${item.id}`} className="flex-1">
                                    <Cards data={item} />
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-5 py-10 px-8 sm:px-10 md:px-16 lg:px-20">
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
