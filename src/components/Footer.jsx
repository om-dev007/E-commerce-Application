import React from 'react'
import logo from '../assets/logoUpdated.png'
import { Link } from 'react-router-dom'
import whatsapp from '../assets/whatsapp.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'

const Footer = () => {
    return (
        <>
            <div className='flex justify-self-center gap-5 flex-col px-4 md:px-10'>
                <div className='flex flex-col md:flex-row py-5 justify-center gap-5 items-center'>
                    <div>
                        <img className='w-8 md:w-10' src={logo} alt="" />
                    </div>
                    <div>
                        <h3 className='text-2xl md:text-4xl text-[#454545] font-bold '>Velnixa</h3>
                    </div>
                </div>
                <div className='flex flex-wrap gap-5 text-gray-700 font-medium text-base md:text-lg justify-center'>
                    <Link to='/about' >About</Link>
                    <Link to='/products' >Products</Link>
                    <Link to='/offices' >Offices</Link>
                    <Link to='/help'>Help</Link>
                </div>
                <div className='flex gap-5 py-5 justify-center'>
                    <div>
                        <img className='w-6 md:w-7' src={instagram} alt="" />
                    </div>
                    <div>
                        <img className='w-6 md:w-7' src={facebook} alt="" />
                    </div>
                    <div>
                        <img className='w-6 md:w-7' src={whatsapp} alt="" />
                    </div>
                </div>
            </div>
            <div>
            </div>
            <div className='text-center py-1 text-gray-500 font-semibold'>
                Copyright @2025 - All Right Reserved
            </div>
        </>
    )
}

export default Footer