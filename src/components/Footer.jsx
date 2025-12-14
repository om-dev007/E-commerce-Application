import React from 'react'
import logo from '../assets/updatedLogo.jpg'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import whatsapp from '../assets/whatsapp.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'

const Footer = () => {
    return (
        <>
            <div className='flex justify-self-center gap-5 flex-col px-4 md:px-10'>
                <div className='flex justify-center items-center'>
                    <div>
                        <img className='w-9' src={logo} alt="" />
                    </div>
                    <div>
                        <h3 className='font-semibold text-2xl md:text-3xl 
             bg-linear-to-r from-emerald-500 to-green-700 
             bg-clip-text text-transparent '>Velnixa</h3>
                    </div>
                </div>
                <div className='flex flex-wrap gap-5 font-semibold text-base md:text-lg justify-center'>
                    <NavLink className={({ isActive }) => ` hover:text-green-600 transition-all ${isActive ? 'text-green-600 font-bold' : 'text-gray-600'}`
                    } to='/about' >About</NavLink>
                    <NavLink className={({ isActive }) => ` hover:text-green-600 transition-all ${isActive ? 'text-green-600 font-bold' : 'text-gray-600'}`
                    } to='/mens' >Products</NavLink>
                    <NavLink className={({ isActive }) => ` hover:text-green-600 transition-all ${isActive ? 'text-green-600 font-bold' : 'text-gray-600'}`
                    } to='/offices' >Offices</NavLink>
                    <NavLink className={({ isActive }) => ` hover:text-green-600 transition-all ${isActive ? 'text-green-600 font-bold' : 'text-gray-600'}`
                    } to='/help'>Help</NavLink> 
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