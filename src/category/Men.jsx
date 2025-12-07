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
            <div className='py-2 flex justify-center px-10'>
                <img className='w-[85%] rounded ' src={menHero} alt="" />
            </div>
            <div className='flex gap-5 justify-center flex-wrap py-10 px-15'>
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