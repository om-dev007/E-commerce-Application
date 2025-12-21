import React from 'react'
import Navbar from '../components/Navbar'
import menHero from '../assets/menHero.jpg'
import { menData } from '../store/data'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Men = () => {
    return (
        <>
            <Navbar />
            <div className='py-2 flex justify-center px-4 md:px-10'>
                <img className='w-full md:w-[85%] rounded ' src={menHero} alt="" />
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-5 py-10 px-8 sm:px-10 md:px-16 lg:px-20'>
                {menData.map((items) => {
                    return <Link to={`/mens/${items.id}`} >
                        <Cards data={items} key={items.id} />
                    </Link>
                })}
            </div>
            <Footer/>
        </>
    )
}

export default Men