import React from 'react'

const FooterGreets = () => {
  return (
    <div className='py-10 md:py-20 flex flex-col gap-5 justify-center px-4 md:px-20'>
        <div className=''>
            <h1 className='text-3xl md:text-5xl text-center text-[#454545] font-bold'>Get Exclusive Offers on Your Email</h1>
        </div>
        <div>
            <h1 className='text-lg md:text-xl text-center font-semibold text-[#454545] '>Subscibe to our newsletter and stay updated</h1>
        </div>
        <div className='flex flex-col md:flex-row justify-center gap-2'>
            <input className='border-2 border-gray-400 rounded-2xl outline-0 focus:border-green-500 px-5 py-2 w-full md:w-auto' type="text" placeholder='Enter your email here...' />
            <button className='bg-green-600 outline-0 text-white px-4 py-2 rounded cursor-pointer hover:scale-105 transition-all mt-2 md:mt-0'>Search</button>
        </div>
    </div>
  )
}

export default FooterGreets