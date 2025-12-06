import React from 'react'
import kidsSale from '../assets/kidsSale.jpg'
import Navbar from '../components/Navbar'

const Kids = () => {
  return (
    <>
    <Navbar/>
      <div>
        <div className='flex px-10 justify-center py-2'>
          <img className='w-[85%] rounded ' src={kidsSale} alt="" />
        </div>
      </div>
    </>
  )
}

export default Kids