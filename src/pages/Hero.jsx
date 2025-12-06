import React from 'react'
import hand_icon from '../assets/hand_icon.png'
import logo from '../assets/p8.webp'
import arrow from '../assets/arrow_icon.png'

const Hero = () => {
    return (
        <div className='bg-linear-to-b from-green-300 to-white  flex items-center justify-evenly min-h-screen '>
            <div>
                <div className='py-1 px-1'>
                    <h2 className='font-semibold text-2xl'>Best Deals ! Best Prices ! </h2>
                </div>
                <div className='py-1 px-1'>
                    <h1 className='font-bold flex items-center gap-3 text-6xl'>
                        new <span>
                            <img className='h-15' src={hand_icon} alt="" />
                        </span>
                    </h1>
                </div>
                <div className='py-2 px-1'>
                    <h1 className='font-bold text-6xl'>
                        collections
                    </h1>
                </div>
                <div className='py-2 '>
                    <h1 className='font-bold text-6xl'>
                        for everyone
                    </h1>
                </div>
                <div className='py-2 mt-5 flex px-2'>
                    <button className='bg-[#ff4141] cursor-pointer outline-0 hover:scale-105 transition-all flex items-center px-20 gap-2 text-white rounded-3xl py-3'>
                        Latest Collection <span>
                            <img className='h-5 ' src={arrow} alt="" />
                        </span>
                    </button>
                </div>
            </div>
            <div>
                <div>
                    <img className='h-100' src={logo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Hero