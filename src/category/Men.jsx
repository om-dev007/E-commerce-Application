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

            <div className="bg-[#FAF8F5] py-2 flex justify-center px-4 md:px-10">
                <img
                    className="w-full sm:w-[85%] rounded-2xl h-[30vh] sm:h-[70vh] shadow-sm"
                    src={menHero}
                    alt="Men Collection"
                />
            </div>

            <div className="bg-[#FAF8F5] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
                            gap-x-5 gap-y-6 py-10 px-6 sm:px-10 md:px-16 lg:px-20">
                {menData.map((items) => (
                    <Link to={`/product/${items.id}`} key={items.id}>
                        <Cards data={items} />
                    </Link>
                ))}
            </div>

            <Footer />
        </>
    )
}

export default Men
