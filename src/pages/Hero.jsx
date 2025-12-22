import logo from '../assets/heroImg.png'

const Hero = () => {
    return (
        <div className="md:min-h-screen px-5 sm:px-10 md:px-20 lg:px-30 bg-[#0f2f2e] flex justify-start items-center py-20 md:py-0 bg-no-repeat bg-center bg-cover w-full" style={{
            backgroundImage: `url(${logo})`,
        }}>
            <div className='flex hero-page flex-col font-playfair gap-1 sm:gap-3'>
                <div>
                    <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#222121] font-bold '>Effortleelly</h1>
                </div>
                <div>
                    <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0c0c0c] font-bold'>Chic. Explore</h1>
                </div>
                <div>
                    <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0c0c0c] font-bold'>New Collections</h1>
                </div>
                <div>
                    <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-bold'>Fashion that fits life</h1>
                </div>
                <div>
                    <button className='bg-green-500 text-white px-5 py-2 rounded cursor-pointer hover:scale-105 transition-all'>Shop Now</button>
                </div>
            </div>
        </div>
    )
}

export default Hero