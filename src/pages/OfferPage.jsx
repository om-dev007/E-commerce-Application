import React from 'react'
import offerGirl from '../assets/offerGirl.webp'

const OfferPage = () => {
  return (
    <div className='flex bg-linear-to-t from-emerald-400 to-white justify-center px-20  py-10 '>
        <div className='items-center w-full justify-center md:justify-evenly rounded-2xl flex flex-col md:flex-row py-10 px-4 md:px-30'>
            <div className='text-center md:text-left mb-8 md:mb-0'>
                <h1 className='text-2xl md:text-4xl font-semibold'>Exclusive</h1>
                <h1 className='text-2xl md:text-4xl font-semibold'>Offers For You</h1>
                <h1 className='text-lg md:text-xl font-semibold'>
                    ONLY ON BEST SELLERS
                </h1>
                <h1 className='text-lg md:text-xl font-semibold'>PRODUCTS</h1>
            </div>
            <div>
                <img className='h-auto w-80 sm:w-100 md:w-100 mx-auto md:mx-0' src={offerGirl} alt="Girl" />
            </div>
        </div>
    </div>
  )
}

export default OfferPage