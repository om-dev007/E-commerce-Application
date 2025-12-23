import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import logo from "../assets/heroImg.webp";
import Hero2 from '../assets/Hero2.webp'
import Hero7 from '../assets/HeroImg7.webp'
import Hero8 from '../assets/HeroImg8.webp'
import Hero10 from '../assets/HeroImg10.webp'

const heroImages = [logo, Hero2, Hero8, Hero7, Hero10];

const Hero = () => {
  return (
    <section className="relative w-full sm:min-h-[90vh] overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        loop
        speed={1600}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        slidesPerView={1}
        className="w-full sm:min-h-[90vh]"
      >
        {heroImages.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="
                relative sm:min-h-[90vh] px-4 sm:px-10 md:px-20 lg:px-20 xl:px-30 flex items-center py-20 sm:py-0 bg-no-repeat bg-center bg-cover
              "
              style={{ backgroundImage: `url(${img})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-black/10"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col font-playfair gap-3 max-w-xl animate-heroText">
                <h1 className="text-2xl sm:text-4xl lg:text-6xl xl:text-7xl font-extrabold text-[#f3f2f2ea]">
                  Effortlessly Chic.
                </h1>

                <h2 className="text-sm sm:text-xl lg:text-3xl font-semibold text-[#f3f2f2ea]">
                  Explore New Collections
                </h2>

                <p className="text-xs sm:text-sm lg:text-lg text-white max-w-md">
                  Fashion that fits your life
                </p>

                <button className="mt-5 w-fit px-6 py-2.5 bg-[#2F6B4F] hover:bg-[#24563F] transition-all text-white rounded-lg">
                  Shop Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
