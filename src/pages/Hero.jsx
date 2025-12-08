import React from 'react'
import hand_icon from '../assets/hand_icon.png'
import logo from '../assets/p8.webp'
import arrow from '../assets/arrow_icon.png'

const Hero = () => {
    return (
        <div className='bg-linear-to-b from-green-300 to-white flex py-5 flex-col md:flex-row items-center justify-center md:justify-evenly min-h-screen px-4 md:px-10'>
            <div className='text-center md:text-left mb-8 sm:order-1 md:order-1 lg:order-1 order-2 md:mb-0'>
                <div className='py-1 px-1'>
                    <h2 className='font-semibold text-xl md:text-2xl'>Best Deals ! Best Prices ! </h2>
                </div>
                <div className='py-1 px-1'>
                    <h1 className='font-bold flex items-center justify-center md:justify-start gap-3 text-4xl md:text-6xl'>
                        new <span>
                            <img className='h-10 md:h-15' src={hand_icon} alt="" />
                        </span>
                    </h1>
                </div>
                <div className='py-2 px-1'>
                    <h1 className='font-bold text-4xl md:text-6xl'>
                        collections
                    </h1>
                </div>
                <div className='py-2 '>
                    <h1 className='font-bold text-4xl md:text-6xl'>
                        for everyone
                    </h1>
                </div>
                <div className='py-2 mt-5 flex px-2 justify-center md:justify-start'>
                    <button className='bg-[#ff4141] cursor-pointer outline-0 hover:scale-105 transition-all flex items-center px-8 md:px-20 gap-2 text-white rounded-3xl py-3 text-sm md:text-base'>
                        Latest Collection <span>
                            <img className='h-4 md:h-5 ' src={arrow} alt="" />
                        </span>
                    </button>
                </div>
            </div>
            <div className='order-1 sm:order-2 md:order-2 lg:order-2 ' >
                <div>
                    <img className='h-80 md:h-100 w-auto' src={logo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero