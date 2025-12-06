import React from 'react'
import Navbar from '../components/Navbar'
import menHero from '../assets/menHero.jpg'

const Men = () => {
  return (
    <div>
        <Navbar/>
        <div className=''>
            <img src={menHero} alt="" />
        </div>
    </div>
  )
}

export default Men