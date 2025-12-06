import React from 'react'

const FooterGreets = () => {
  return (
    <div className='py-10 flex flex-col gap-5 justify-center px-20'>
        <div className=''>
            <h1 className='text-5xl text-center text-[#454545] font-bold'>Get Exclusive Offers on Your Email</h1>
        </div>
        <div>
            <h1 className=' text-center font-semibold text-[#454545] '>Subscibe to our newsletter and stay updated</h1>
        </div>
        <div className='flex justify-center gap-2'>
            <input className='border-2 border-gray-400 rounded-2xl outline-0 focus:border-green-500 px-5 py-2 ' type="text" placeholder='Enter your email here...' />
            <button className='bg-green-600 outline-0 text-white px-4 py-2 rounded cursor-pointer hover:scale-105 transition-all '>Search</button>
        </div>
    </div>
  )
}

export default FooterGreets