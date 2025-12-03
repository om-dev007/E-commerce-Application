import React from 'react'
import logo from '../assets/logo (1).webp'
import { Link } from 'react-router-dom'
import cart_icon from '../assets/cart_icon.png'
import { Heart } from 'lucide-react';
import { UserRound } from 'lucide-react';


const Navbar = () => {
  return (
    <>
      <div className='flex items-center justify-between p-5'>
        <div className='flex items-center gap-5 px-2'>
          <div className='flex items-center gap-1'>
            <div>
              <img className='h-12' src={logo} alt="" />
            </div>
            <div>
              <h1 className='font-semibold text-3xl'>Shopify</h1>
            </div>
          </div>
        </div>
        <div>
            <input className='border-2 border-gray-600  px-8 transition-all focus:border-green-500 py-2 rounded-2xl outline-0 ' type="text" placeholder='Search your items here...' />
          </div>
        <div className='flex '>
        <div className='flex items-center gap-5'>
          <div>
            <Heart />
          </div>
          <div>
            <UserRound />
          </div>
          <div>
            <button className='outline-0'>
              <div>
                <img className='h-10' src={cart_icon} alt="" />
              </div>
            </button>
          </div>
        </div>
        </div>
         </div>
      <div className='flex pr-5 items-center gap-5'>
        <div className='flex text-gray-700 font-semibold justify-end gap-5'>
          <Link to='/'>Home</Link>
          <Link to='/man' >Man</Link>
          <Link to='/women'>Women</Link>
          <Link to='/kids'>Kids</Link>
        </div>
      </div>
    </>
  )
}

export default Navbar