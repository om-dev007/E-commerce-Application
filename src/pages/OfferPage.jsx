import React from 'react'
import offerGirl from '../assets/offerGirl.webp'

const OfferPage = () => {
  return (
    <div className='flex justify-center px-50 py-30'>
        <div className='bg-linear-to-t from-emerald-400 to-white items-center w-[100%] justify-evenly rounded-2xl flex py-10 px-30'>
            <div>
                <h1 className='text-4xl font-semibold'>Exclusive</h1>
                <h1 className='text-4xl font-semibold'>Offers For You</h1>
                <h1 className=' font-semibold'>
                    ONLY ON BEST SELLERS
                </h1>
                <h1 className=' font-semibold'>PRODUCTS</h1>
            </div>
            <div>
                <img className='h-auto w-100' src={offerGirl} alt="Girl" />
            </div>
        </div>
    </div>
  )
}

export default OfferPage