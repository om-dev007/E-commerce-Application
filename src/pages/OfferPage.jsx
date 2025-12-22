import React from 'react'
import offerGirl from '../assets/offerGirl.webp'

const OfferPage = () => {
  return (
    <section className="bg-[#F5F1EB] px-4 sm:px-8 md:px-16 lg:px-24 py-10">
      <div className="max-w-7xl mx-auto rounded-2xl flex flex-col-reverse sm:flex-row items-center justify-between gap-10">

        <div className="text-center md:text-left max-w-xl">

          <span className="inline-block bg-[#1F3D2B] text-white px-4 py-1 rounded-full text-xs tracking-widest font-semibold">
            EXCLUSIVE OFFER
          </span>

          <p className="mt-4 text-[#4B5B52] text-base md:text-lg">
            Get Up To
          </p>

          <h2 className="text-[#1F3D2B] text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            50% OFF
          </h2>

          <p className="mt-2 text-[#6B7C72] text-base md:text-lg">
            On Select Styles
          </p>

          <button className="mt-6 outline-0 bg-[#2F6B4F] cursor-pointer hover:bg-[#24563F] text-white px-7 py-3 rounded-lg shadow-md transition-all duration-300 hover:scale-105">
            Grab the Deal
          </button>
        </div>

        <div className="flex relative bg-white rounded-2xl shadow-lg justify-center md:justify-end w-auto sm:w-auto">
          <img
            src={offerGirl}
            alt="Exclusive Offer"
            className="w-64 sm:w-72 md:w-80 lg:w-96 object-contain"
          />
          {/* <div className='absolute bottom-0 left-0 w-full h-20 bg-linear-to-t from-[#F5F1EB] to-transparent'>
          </div> */}
        </div>

      </div>
    </section>
  )
}

export default OfferPage
