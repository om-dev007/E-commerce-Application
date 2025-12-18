import React from 'react'
import hand_icon from '../assets/hand_icon.png'
import logo from '../assets/updatedGIrlIMg (Edited) (Edited).png'
import arrow from '../assets/arrow_icon.png'

const Hero = () => {
    return (
        <div className='bg-linear-to-r from-[#0f2f2e] via-[#2f3a33] to-[#8a633c] flex pt-10 flex-col sm:flex-row md:flex-row items-center justify-center md:justify-evenly px-2 md:px-10'>
            <div className='text-center md:text-left mb-8 sm:order-1 md:order-1 lg:order-1 order-1 md:mb-0'>
                <div className='py-1 px-1'>
                    <h2 className='font-semibold text-[#a16d38] text-xl md:text-2xl'>Best Deals | Best Prices ! </h2>
                </div>
                <div className='hidden sm:flex py-1 px-1'>
                    <h1 className='font-bold text-[#faf6f6dc] flex items-center justify-center md:justify-start gap-3 text-4xl md:text-6xl'>
                        new <span>
                            <img className='h-10 md:h-15' src={hand_icon} alt="" />
                        </span>
                    </h1>
                </div>
                <div className='hidden sm:flex py-2 px-1'>
                    <h1 className='font-bold text-[#faf6f6dc] text-4xl md:text-6xl'>
                        collections
                    </h1>
                </div>
                <div className='hidden sm:flex py-2 '>
                    <h1 className='font-bold text-[#faf6f6dc] text-4xl md:text-6xl'>
                        for everyone
                    </h1>
                </div>
                <div className='flex flex-wrap flex-row [@media(min-width:495px)]:flex-col [@media(max-width:330px)]:flex justify-center'>
                    <div className='flex sm:hidden py-1 px-1'>
                        <h1 className='font-bold text-[#faf6f6dc] flex items-center justify-center md:justify-start gap-3 text-3xl md:text-6xl'>
                            new <span>
                                <img className='h-10 md:h-15' src={hand_icon} alt="" />
                            </span>
                        </h1>
                    </div>
                    <div className='py-2 flex sm:hidden px-1'>
                        <h1 className='font-bold text-[#faf6f6dc] text-3xl md:text-6xl'>
                            collections
                        </h1>
                    </div>
                    <div className='py-2 flex sm:hidden'>
                        <h1 className='font-bold text-[#faf6f6dc] text-3xl md:text-6xl'>
                            for everyone
                        </h1>
                    </div>
                </div>
                <div className='py-2 mt-5 flex px-2 justify-center md:justify-start'>
                    <button className='bg-[#e7b13b] cursor-pointer outline-0 hover:scale-105 transition-all flex items-center px-8 md:px-20 gap-2 text-white font-medium rounded-3xl py-3 text-sm md:text-base'>
                        Latest Collection <span>
                            <img className='h-4 md:h-5 ' src={arrow} alt="" />
                        </span>
                    </button>
                </div>
            </div>
            <div className='order-2 sm:relative sm:order-2 md:order-2 lg:order-2 ' >
                <div className='z-10 flex items-end justify-center'>
                    <img className='w-auto h-80 [@media(max-width:340px)]:h-70 sm:h-90 md:h-100 object-contain' src={logo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero