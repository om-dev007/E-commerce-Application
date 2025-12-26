import React from 'react'
import kidsSale from '../assets/kidsSale.jpg'
import Navbar from '../components/Navbar'
import { kidsData } from '../store/data'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Kids = () => {
  return (
    <>
    <Navbar/>
      <div>
        <div className='flex px-4 md:px-10 justify-center py-2'>
          <img className='w-full sm:w-[85%] rounded-2xl h-[30vh] sm:h-[70vh] shadow-sm' src={kidsSale} alt="" />
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-5 py-10 px-8 sm:px-10 md:px-16 lg:px-20'>
          {kidsData.map((item) => {
            return <Link to={`/product/${item.id}`}>
            <Cards data={item} key={item.id} />
            </Link>
          })}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Kids