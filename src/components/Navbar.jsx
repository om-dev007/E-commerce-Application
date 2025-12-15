import React from 'react'
import logoUpdated from '../assets/updatedLogo.jpg'
import { NavLink } from 'react-router-dom'
import { Heart, ShoppingCart } from 'lucide-react';
import { UserRound } from 'lucide-react';
import { Search } from 'lucide-react';
import Login from '../LoginSignUp/Login';

const Navbar = () => {
  return (
    <>
      <div className='flex flex-col sm:flex-row sm:py-2 md:flex-row items-center justify-between px-5 py-5'>
        <div className='flex items-center gap-5 px-2 mb-4 md:mb-0'>
          <div className='flex items-center'>
            <div>
              <img className='w-9 md:w-34 lg:w-22 sm:w-30 ' src={logoUpdated} alt="logo" />
            </div>
            <div>
              <h1 className="font-semibold text-2xl md:text-3xl 
             bg-linear-to-r from-emerald-500 to-green-700 
             bg-clip-text text-transparent">
                Velnixa
              </h1>
            </div>
          </div>
        </div>
        <div className='mb-4 mx-5 w-full md:mb-0'>
          <div className='flex w-full focus-within:border-green-500 outline-0 transition-all border-3 rounded-2xl border-gray-600 items-center'>
            <Search className='px-1 text-gray-500 h-full w-10' />
            <input className=' px-2 w-full py-2 outline-0 rounded-2xl  ' type="text" placeholder='Search your items here...' />
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='flex items-center gap-3 md:gap-5'>
            <div>
              <Heart className='h-6 text-gray-700 md:h-8 w-8' />
            </div>
            <div>
              <NavLink to='/login' className={({ isActive }) =>
                `flex items-center transition-all font-bold hover:text-green-600  text-gray-700 h-10  ${isActive ? "text-green-600 font-bold" : "text-gray-700"
                }`
              } > <UserRound className='w-10 h-6 md:h-8' /> </NavLink>
            </div>
            <div>
              <button className="outline-none">
                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    `flex h-6 text-gray-700 font-bold md:h-8 w-8 items-center transition-all hover:text-green-600 ${isActive ? "text-green-600" : "text-gray-700"
                    }`
                  }
                >
                  <ShoppingCart className='w-10 h-6 md:h-8' />
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex pr-5 sm:pt-0 py-2 items-center gap-5'>
        <div className='flex flex-wrap justify-center w-full text-gray-700 font-semibold gap-5'>
          <div>
            <NavLink className={({ isActive }) => ` hover:text-green-600 transition-all ${isActive ? 'text-green-600 font-bold' : 'text-gray-600'}`
            }
              to='/'>Home</NavLink>
          </div>
          <div>
            <NavLink className={({ isActive }) => ` hover:text-green-600 transition-all ${isActive ? 'text-green-600 font-bold' : 'text-gray-600'}`
            }
              to='/mens' >Men</NavLink>
          </div>
          <div>
            <NavLink className={({ isActive }) => ` hover:text-green-600 transition-all ${isActive ? 'text-green-600 font-bold' : 'text-gray-600'}`
            }
              to='/womens'>Women</NavLink>
          </div>
          <div>
            <NavLink className={({ isActive }) => ` hover:text-green-600 transition-all ${isActive ? 'text-green-600 font-bold' : 'text-gray-600'}`
            }
              to='/kids'>Kids</NavLink>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar