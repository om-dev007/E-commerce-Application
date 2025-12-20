import React from 'react'
// import logoUpdated from '../assets/updatedLogo.jpg'
import { NavLink } from 'react-router-dom'
import { Heart, ShoppingCart, UserRound, Search } from 'lucide-react'

const Navbar = () => {
  return (
    <>
      <div className='flex flex-col sm:flex-row md:flex-row items-center justify-between px-2 py-1'>

        <div className='flex items-center gap-5 justify-between sm:justify-center px-2 mb-1 w-full sm:w-auto md:mb-0'>
          <NavLink to="/">
            <div className='flex gap-1 items-center'>
              <div>
                <h1 className='font-serif text-5xl text-[#8a633c] '> V </h1>
              </div>
              <div>
                <h1
                  className="font-semibold text-2xl md:text-3xl 
                  bg-linear-to-r from-gray-600 to-gray-900 
                  bg-clip-text text-transparent"
                >
                  Velnixa
                </h1>
              </div>
            </div>
          </NavLink>
          <div className="flex items-center gap-3 sm:hidden">
            <NavLink to="/like" className={({ isActive }) =>
              `flex items-center transition-all font-bold hover:text-[#c7802f] h-10 ${isActive ? "text-[#c7802f]" : "text-gray-800"
              }`
            }>
              <Heart />
            </NavLink>
            <NavLink to="/login" className={({ isActive }) =>
              `flex items-center transition-all font-bold hover:text-[#c7802f] h-10 ${isActive ? "text-[#c7802f]" : "text-gray-800"
              }`
            }>
              <UserRound />
            </NavLink>
            <NavLink to="/cart" className={({ isActive }) =>
              `flex items-center transition-all font-bold hover:text-[#c7802f] h-10 ${isActive ? "text-[#c7802f]" : "text-gray-800"
              }`
            }>
              <ShoppingCart />
            </NavLink>
          </div>
        </div>

        <div className='flex pr-5 sm:pt-0 py-2 items-center gap-5'>
          <div className='flex flex-wrap justify-center w-full text-gray-200 font-semibold gap-5'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                `hover:text-[#c7802f] font-medium transition-all ${isActive ? 'text-[#c7802f] font-bold' : 'text-gray-700'
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to='/mens'
              className={({ isActive }) =>
                `hover:text-[#c7802f] font-medium transition-all ${isActive ? 'text-[#c7802f] font-bold' : 'text-gray-700'
                }`
              }
            >
              Men
            </NavLink>

            <NavLink
              to='/womens'
              className={({ isActive }) =>
                `hover:text-[#c7802f] font-medium transition-all ${isActive ? 'text-[#c7802f] font-bold' : 'text-gray-700'
                }`
              }
            >
              Women
            </NavLink>

            <NavLink
              to='/kids'
              className={({ isActive }) =>
                `hover:text-[#c7802f] font-medium transition-all ${isActive ? 'text-[#c7802f] font-bold' : 'text-gray-700'
                }`
              }
            >
              Kids
            </NavLink>
          </div>
        </div>

        <div className='sm:flex hidden  justify-center'>
          <div className='flex items-center gap-3'>
            <div>
              <NavLink
                to="/like"
                className={({ isActive }) =>
                  `flex items-center transition-all font-bold hover:text-[#c7802f] h-10 ${isActive ? "text-[#c7802f]" : "text-gray-200"
                  }`
                }
              >
                <Heart className='w-10 h-6 md:h-8' />
              </NavLink>
            </div>

            <div>
              <NavLink
                to='/login'
                className={({ isActive }) =>
                  `flex items-center transition-all font-bold w-8 hover:text-[#c7802f] h-10 ${isActive ? "text-[#c7802f] font-bold" : "text-gray-200"
                  }`
                }
              >
                <UserRound className='w-10 h-6 md:h-8' />
              </NavLink>
            </div>

            <div>
              <button className="outline-none">
                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    `flex h-6 font-bold md:h-8 w-8 items-center transition-all hover:text-[#c7802f] ${isActive ? "text-[#c7802f]" : "text-gray-200"
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
    </>
  )
}

export default Navbar
