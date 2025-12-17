import React from 'react'

const FooterGreets = () => {
  return (
    <div className='py-10 md:pt-20 flex flex-col gap-5 justify-center px-4 md:px-20'>
      <div className=''>
        <h1 className='text-3xl md:text-5xl text-center text-[#454545] font-bold'>Get Exclusive Offers on Your Email</h1>
      </div>
      <div>
        <h1 className='text-lg md:text-xl text-center font-semibold text-[#454545] '>Subscibe to our newsletter and stay updated</h1>
      </div>
      <div className='flex flex-col md:flex-row justify-center gap-2'>
        <div className='w-full flex justify-center sm:w-auto px-10 sm:px-0'>
          <input className='border-2 border-gray-400 w-50 rounded-2xl outline-0 focus:border-green-500 px-5 py-2 md:w-auto' type="text" placeholder='Enter your email here...' />
        </div>
        <div className='w-full sm:w-auto flex justify-center'>
          <button className='bg-green-600 focus:bg-green-500 w-20 outline-0 text-white px-4 py-2 rounded cursor-pointer hover:scale-105 transition-all mt-2 md:mt-0'>Search</button>
        </div>
      </div>
    </div>
  )
}

export default FooterGreets