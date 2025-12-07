import React from 'react'
import kidsSale from '../assets/kidsSale.jpg'
import Navbar from '../components/Navbar'
import { kidsData } from '../store/data'
import Cards from '../components/Cards'
import Footer from '../components/Footer'

const Kids = () => {
  return (
    <>
    <Navbar/>
      <div>
        <div className='flex px-10 justify-center py-2'>
          <img className='w-[85%] rounded ' src={kidsSale} alt="" />
        </div>
        <div className='flex flex-wrap gap-5 py-10 px-15 justify-center'>
          {kidsData.map((item) => {
            return <Cards data={item} key={item.id} />
          })}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Kids