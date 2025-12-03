import React from 'react'
import logo from '../assets/logo.webp'
import cart_icon from '../assets/cart_icon.png'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between  py-5'>
      <div className='flex items-center gap-5'>
        <div className='flex items-center'>
          <div>
            <img className='h-13' src={logo} alt="" />
          </div>
          <div>
            <h1 className='font-semibold text-2xl'>Shopify</h1>
          </div>
        </div>
        <div>
          <input className='border-2 border-gray-600 px-4 transition-all focus:border-green-500 py-2 rounded-2xl outline-0 ' type="text" placeholder='Search your items here...' />
        </div>
      </div>
      <div className='flex pr-5 items-center gap-5'>
        <div className=''>
          <ul className='flex text-gray-700 font-semibold justify-end gap-5'>
            <li className=''>Home</li>
            <li>Man</li>
            <li>Women</li>
            <li>Kids</li>
          </ul>
        </div>
        <div>
          <button className='bg-green-500 text-white outline-0 cursor-pointer hover:scale-105 transition-all px-3 py-1 rounded'>Login</button>
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
  )
}

export default Navbar