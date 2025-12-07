import React from 'react'
import logo from '../assets/logo (1).webp'
import { Link } from 'react-router-dom'
import cart_icon from '../assets/cart_icon.png'
import { Heart } from 'lucide-react';
import { UserRound } from 'lucide-react';


const Navbar = () => {
  return (
    <>
      <div className='flex flex-col sm:flex-row sm:py-2 md:flex-row items-center justify-between p-5'>
        <div className='flex items-center gap-5 px-2 mb-4 md:mb-0'>
          <div className='flex items-center gap-1'>
            <div>
              <img className='h-8 md:h-12' src={logo} alt="" />
            </div>
            <div>
              <h1 className='font-semibold text-2xl md:text-3xl'>Shopify</h1>
            </div>
          </div>
        </div>
        <div className='mb-4 md:mb-0'>
          <input className='border-2 border-gray-600 px-4 md:px-8 transition-all focus:border-green-500 py-2 rounded-2xl outline-0 w-full md:w-auto' type="text" placeholder='Search your items here...' />
        </div>
        <div className='flex justify-center'>
          <div className='flex items-center gap-3 md:gap-5'>
            <div>
              <Heart className='h-6  md:h-8 w-8' />
            </div>
            <div>
              <UserRound className='h-6 md:h-8 w-8' />
            </div>
            <div>
              <button className='outline-0'>
                <div>
                  <img className='h-8 md:h-10' src={cart_icon} alt="" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex pr-5 sm:pt-0 py-2 items-center gap-5'>
        <div className='flex flex-wrap justify-center md:justify-evenly w-full text-gray-700 font-semibold gap-5'>
          <div>
            <Link to='/'>Home</Link>
          </div>
          <div>
            <Link to='/mens' >Men</Link>
          </div>
          <div>
            <Link to='/womens'>Women</Link>
          </div>
          <div>
            <Link to='/kids'>Kids</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar