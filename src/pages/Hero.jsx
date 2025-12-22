import logo from '../assets/heroImg.png'

const Hero = () => {
  return (
    <section
      className="
        relative sm:min-h-[90vh]
        px-4 sm:px-10 md:px-20 lg:px-20 xl:px-30 
        flex items-center py-20 sm:py-0
        bg-no-repeat bg-center bg-cover
      "
      style={{ backgroundImage: `url(${logo})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/15 to-black/5"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col font-playfair gap-2 sm:gap-3 md:pt-0 max-w-xl">

        <h1 className="text-2xl sm:text-4xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-[#7A5A3A]">
          Effortlessly Chic.
        </h1>

        <h2 className="text-sm sm:text-xl lg:text-3xl font-semibold leading-snug text-[#A67C52]">
          Explore New Collections
        </h2>

        <p className="text-xs sm:text-sm lg:text-lg leading-relaxed text-white max-w-md">
          Fashion that fits your life
        </p>

        <button className="mt-5 w-fit px-6 py-2.5 text-sm sm:text-base font-medium bg-[#2F6B4F] hover:bg-[#24563F] transition-all text-white rounded-lg">
          Shop Now
        </button>

      </div>
    </section>
  )
}

export default Hero
